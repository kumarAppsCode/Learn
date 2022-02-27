
-- Generated by ORDS REST Data Services 21.2.4.r2431032
-- Schema: XXQIA  Date: Sun Feb 27 09:12:44 2022 
--

BEGIN
  ORDS.ENABLE_SCHEMA(
      p_enabled             => TRUE,
      p_schema              => 'XXQIA',
      p_url_mapping_type    => 'BASE_PATH',
      p_url_mapping_pattern => 'qiaordswst1',
      p_auto_rest_auth      => FALSE);
    
  ORDS.DEFINE_MODULE(
      p_module_name    => 'ExcelUploadAPI',
      p_base_path      => '/excel/',
      p_items_per_page => 0,
      p_status         => 'PUBLISHED',
      p_comments       => NULL);

  ORDS.DEFINE_TEMPLATE(
      p_module_name    => 'ExcelUploadAPI',
      p_pattern        => 'tempemp',
      p_priority       => 0,
      p_etag_type      => 'HASH',
      p_etag_query     => NULL,
      p_comments       => NULL);

  ORDS.DEFINE_HANDLER(
      p_module_name    => 'ExcelUploadAPI',
      p_pattern        => 'tempemp',
      p_method         => 'POST',
      p_source_type    => 'plsql/block',
      p_mimes_allowed  => '',
      p_comments       => NULL,
      p_source         => 
'BEGIN
  XX_POST_TEMP_EMP(P_DATA => :body);
END;');

    
        
COMMIT;

END;
