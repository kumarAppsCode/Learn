WHERE 1 = 1
AND 
(
instance_id = decode(:instId,      'undefined', instance_id,
                                         'Search',    instance_id,
                                          NULL,       instance_id,
                                                      :instId)
and
((UPPER (interface_name) LIKE '%' || UPPER (:infName) || '%' OR :infName IS NULL) OR 
 UPPER(:infName)= UPPER('Search') OR UPPER(:infName)= UPPER('undefined'))
and 
((UPPER (integration_type) LIKE '%' || UPPER (:intType) || '%' OR :intType IS NULL) OR 
 UPPER(:intType)= UPPER('Search') OR UPPER(:intType)= UPPER('undefined'))
and 
(
(UPPER (log_level) LIKE '%' || UPPER (:logLevel) || '%' OR :logLevel IS NULL) OR 
 UPPER(:logLevel)= UPPER('Search') OR UPPER(:logLevel)= UPPER('undefined')
)
and
(
run_date BETWEEN 
DECODE(:lrun_date,      'undefined'	, run_date,
                        'Search'	, run_date,
                        NULL, 		to_date('1951-01-01', 'yyyy-mm-dd'),
                                    to_date(:lrun_date, 'yyyy-mm-dd')
       ) 
AND
DECODE(:lrun_dateto, 'undefined'	, run_date,
                     'Search'	    , run_date,
                      NULL          , to_date('4712-01-01', 'yyyy-mm-dd'),
                                      to_date(:lrun_dateto, 'yyyy-mm-dd') 
        ) 
)
)   
