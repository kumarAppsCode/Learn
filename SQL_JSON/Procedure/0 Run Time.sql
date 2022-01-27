set SERVEROUTPUT ON; 

declare

p_data BLOB:=utl_raw.cast_to_raw('
                                  {
                                    "PLAN_ID": 1,
                                    "OBJECT_VERSION_NUMBER": -99
                                  }
                                  ');

CURSOR LDATA 
is
SELECT 
    PLAN_ID,
    OBJECT_VERSION_NUMBER

FROM   json_table(p_data FORMAT JSON, '$'
COLUMNS (
PLAN_ID						NUMBER		PATH '$.PLAN_ID',
OBJECT_VERSION_NUMBER		NUMBER      PATH '$.OBJECT_VERSION_NUMBER'
));

--

BEGIN

for i in LDATA 
loop
DBMS_OUTPUT.PUT_LINE('REQUEST_ID==>'||i.PLAN_ID );
DBMS_OUTPUT.PUT_LINE('OBJECT_VERSION_NUMBER==>'||i.OBJECT_VERSION_NUMBER );
end loop;
--

END ;
