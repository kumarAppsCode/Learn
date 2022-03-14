select *  FROM ps_lookup_values_v 
WHERE 
LOOKUP_TYPE_NAME =:lookuptypename
AND NVL(CHILD_LOOKUP_TYPE_ID, 0)=NVL(:childlookuptypeId, 0)
AND ( (UPPER (LOOKUP_VALUE_NAME_DISP) LIKE  '%'|| UPPER (:searchVal) || '%' OR :searchVal IS NULL) OR UPPER(:searchVal)= UPPER('Search') OR UPPER(:searchVal)= UPPER('%7BsearchVal%7D') OR UPPER(:searchVal)= UPPER('undefined')
OR (UPPER (LOOKUP_VALUE_NAME_DISP_AR) LIKE  '%'|| UPPER (:searchVal) || '%' OR :searchVal IS NULL) OR UPPER(:searchVal)= UPPER('Search') OR UPPER(:searchVal)= UPPER('%7BsearchVal%7D')  OR UPPER(:searchVal)= UPPER('undefined') )
