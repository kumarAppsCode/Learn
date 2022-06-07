define(['urijs/URI'], function (URI) {
    'use strict';
 
    var Request = function () {
    };
 
    /**
     * Filter transform function
     * @param configuration
     * @param options the JSON payload that defines the filterCriteria
     * @returns {object} configuration object the url looks like ?filter=foo eq 'bar'.
     */
    Request.prototype.filter = function(configuration, options) {
        var filterCriterion = options;
        if (filterCriterion === undefined) {
          return configuration;
        }
        var operation;
        var criteria = filterCriterion.criteria;
        if (criteria === undefined || criteria.length === 0) {
          if (filterCriterion.attribute && filterCriterion.op && filterCriterion.value) {
            criteria = [filterCriterion];
            operation = "$and";
          } else {
            return configuration;
          }
        }

        function jetFilterOpToScim(fop) {
            switch (fop) {
                case '$co':
                    return '$like';
                case '$le':
                    return '$lte';
                case '$ge':
                    return '$gte';
                default:
                    return fop;
            }
        }
 
        function isEmpty(val) {
            return (val === undefined || val === null || val === '');
        }
 
        if (filterCriterion && criteria && criteria.length > 0) {
          var q = [];
          criteria.forEach(function(crit) {
            if (crit.value === undefined || crit.value === '%%' || crit.value.length === 0) {
              return;
            }
            var v = {};
            if (crit.op === '$co') {
              v[jetFilterOpToScim(crit.op)] = '%'+crit.value+'%';
            } else {
              v[jetFilterOpToScim(crit.op)] = crit.value;
            }
            var vv = {};
            vv[crit.attribute] = v;
            q.push(vv);
          });
          if (q.length > 0) {
            var query = {};
            if (operation === undefined) {
              operation = filterCriterion.op;
            }
            if (operation === undefined) {
              operation = "$and";
            }
            query[operation] = q;
            // ORDS query URL is for example:
            // ...ords/hr/emp?q={"$or":[{"ename":{"$like":"%david%"}},{"job":{"$like":"%developer%"}}]}
            configuration.url = URI(configuration.url).addQuery({ q : JSON.stringify(query)}).toString();
          }
        }
 
        return configuration;
    };
 
    /**
     * Pagination function appends limit and offset parameters to the url
     * @param configuration
     * @param options the JSON payload that defines the pagination criteria
     * @returns {object} configuration object.
     */
    Request.prototype.paginate = function(configuration, options) {
        var newUrl = configuration.url;
        if (options && options.size) {
          newUrl = URI(newUrl).addSearch({limit: options.size, offset: options.offset}).toString();
        }
        configuration.url = newUrl;
        return configuration;
    };
 
    /**
     * Sort transform function
     * @param configuration
     * @param options the JSON payload that defines the sort criteria
     * @returns {object} configuration object. the url looks like ?orderBy=foo:asc
     */
    Request.prototype.sort = function(configuration, options) {
        if (Array.isArray(options) && options.length > 0) {
            var firstItem = options[0];
            if (firstItem.attribute) {
                var dir = firstItem.direction === 'descending' ? 'DESC' : 'ASC';
                var newUrl = configuration.url;
                var sort = '"$orderby":{"'+firstItem.attribute+'":"'+dir+'"}';
                var query = URI(newUrl).search(true);
                if (query.q) {
                  query.q = '{'+sort+','+query.q.substr(1);
                } else {
                  query.q = '{'+sort+'}';
                }
                // ORDS sort URL is for example:
                // ...ords/hr/emp?q={"$orderby":{"sal":"ASC"}}
                // BUT: sorting is applied after filter() method above so sorting
                // needs to be inserted into existing q param if filtering is on
                newUrl = URI(newUrl).search(query).toString();
                configuration.url = newUrl;
            }
        }
        return configuration;
    };
 
    var Response = function() {
 
    };
 
    /**
     * Paginate Response Transform Function Implementation
     */
    Response.prototype.paginate = function(result) {
        var tr = {};
 
        if (result && result.body) {
            var cb = result.body;
            // ORDS does not support "totalCount" but only "hasMore"
            tr.hasMore = cb.hasMore;
        }
        return tr;
    };
 
    return {
        request: Request,
        response: Response
   };
});



-- https://blogs.oracle.com/vbcs/post/getting-started-with-ords-and-oracle-dbatp-access-in-oracle-visual-builder
