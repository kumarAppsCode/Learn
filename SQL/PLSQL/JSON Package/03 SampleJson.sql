create or replace procedure xxpm_json(propertydtl IN clob, pout out VARCHAR2) 
IS
  po_obj        JSON_OBJECT_T;
  li_arr        JSON_ARRAY_T;
  li_item       JSON_ELEMENT_T;
  li_obj        JSON_OBJECT_T;
  unitPrice     VARCHAR2(240);
  quantity      VARCHAR2(240);
  totalPrice    VARCHAR2(240);
  totalQuantity VARCHAR2(240);
BEGIN
  li_arr := JSON_ARRAY_T.parse(propertydtl);
  
FOR i IN 0 .. li_arr.get_size - 1 
LOOP
DBMS_OUTPUT.PUT_LINE(i);
li_obj := JSON_OBJECT_T(li_arr.get(i));
    quantity := li_obj.get_String('PROPERTY_ID');
    unitPrice := li_obj.get_String('PROPERTY_NAME');
    DBMS_OUTPUT.PUT_LINE('PROPERTY_ID=>'||quantity);
    DBMS_OUTPUT.PUT_LINE('PROPERTY_NAME=>'||unitPrice);
NULL;
END LOOP;
  
  
    
--pout:=quantity;
END xxpm_json;
