CREATE OR REPLACE FUNCTION GET_MEDIA 
(
  MEDIA_ID IN NUMBER 
) RETURN BLOB AS 
 payload blob;
BEGIN
  SELECT content INTO payload FROM XXQIA_MEDIA WHERE ID = MEDIA_ID;
		RETURN payload;
END GET_MEDIA;
