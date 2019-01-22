<!DOCTYPE html>
<html>
<body>
<?php
$handle = opendir(dirname(realpath(__FILE__)).'/pictures/');
while($file = readdir($handle)){
  if($file !== '.' && $file !== '..'){
    echo '<img src="pictures/'.$file.'" border="0" />';
  }
}
?>

</body>
</html>
