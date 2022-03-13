SELECT 
distinct
INSTANCE_ID,
INTERFACE_NAME as INTERFACE_NAME_CODE,
INTERFACE_NAME as INTERFACE_NAME_NAME,
INTERFACE_ID as INTERFACE_ID_CODE,
INTERFACE_ID as INTERFACE_ID_NAME
FROM xxzlr_log_msgs_tbl
where 
1=1
AND
( 
(
    (UPPER (INSTANCE_ID) LIKE '%' || UPPER (:searchValue) || '%' OR :searchValue IS NULL) OR 
    UPPER(:searchValue)= UPPER('Search') OR UPPER(:searchValue)= UPPER('undefined') 
) 
 or 
(
    (UPPER (INTERFACE_NAME) LIKE '%' || UPPER (:searchValue) || '%' OR :searchValue IS NULL) OR 
    UPPER(:searchValue)= UPPER('Search') OR UPPER(:searchValue)= UPPER('undefined') 
)
)                                                      
