<html>
    <head>
        <title>
            Testing 101
        </title>
    </head>
    <body>
        <form action="" method="POST">
        <textarea name="htmlCodeField" id="htmlCodeField" cols="30" rows="10"></textarea>
        <textarea name="cssCodeField" id="cssCodeField" cols="30" rows="10"></textarea>
        <textarea name="jsCodeField" id="jsCodeField" cols="30" rows="10"></textarea>


        <input type="submit" value="submit" name="submit">
        </form>
    </body>
</html>


<?php
if(isset($_POST["submit"])){
    $htmlSnippet = htmlspecialchars($_POST["htmlCodeField"]);
    $cssSnippet = htmlspecialchars($_POST["cssCodeField"]);
    $jsSnippet = htmlspecialchars($_POST["jsCodeField"]);

    $val = $htmlSnippet."<br><br>".$cssSnippet."<br><br>".$jsSnippet;

    $file = fopen("testingout.txt", "w");
    fwrite($file, $val);
    fclose($file);

    echo "Done";
}
?>