create or replace PROCEDURE "XX_POST_TEMP_EMP" (p_data IN blob) 
AS
p_exceldata SYS_REFCURSOR;
CURSOR LDATA 
is
SELECT
    firstname,
    lastname,
    emailaddress,
    age,
    qualification
FROM
json_table(p_data FORMAT JSON, '$.parts[*]'
COLUMNS (
firstname			VARCHAR2    PATH '$.firstName',
lastname		    VARCHAR2    PATH '$.lastName',
emailaddress		VARCHAR2    PATH '$.emailAddress',
age		            NUMBER      PATH '$.age',
qualification		VARCHAR2    PATH '$.qualification'
));
BEGIN
for i in LDATA 
loop
INSERT INTO tempemp (
    firstname,
    lastname,
    emailaddress,
    age,
    qualification
) VALUES (
    i.firstname,
    i.lastname,
    i.emailaddress,
    i.age,
    i.qualification
);
COMMIT;
end loop;
--
OPEN p_exceldata FOR
SELECT * FROM tempemp;
---- 
  APEX_JSON.open_object;
  APEX_JSON.write ('p_excel', p_exceldata);
--    APEX_JSON.write ( 'rws', 'p_budgetplan');
  APEX_JSON.close_object;

EXCEPTION 
WHEN OTHERS THEN
DBMS_OUTPUT.PUT_LINE(sqlerrm);
  APEX_JSON.open_object;
  APEX_JSON.write ('p_excel', sqlerrm);
--    APEX_JSON.write ( 'rws', 'p_budgetplan');
  APEX_JSON.close_object;

END XX_POST_TEMP_EMP;
