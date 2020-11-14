<?php
namespace Carte;
?>
<div id="nom"
    style="color: black; font-weight: bold; font-size: 14px; text-shadow: 1px 1px 1px rgb(255, 255, 255); border: 1px solid white; background-color: rgba(255,255,255,0.85); z-index:10;">
</div>
<?php

class Carte {
    private $data = [];
  
    function __construct($data) {
        $this->data = $data;
    }
   
    function show() {
        $this->openSVG();

        $this->showPolys();

        $this->closeSVG();

        $this->onLoad();
    }
    private function openSVG() {
        echo '<svg id="svgDiv" version="1.1" xmlns:bx="https://boxy-svg.com" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 600" enable-background="new 0 0 1000 600" xml:space="preserve">';
    }
    private function closeSVG() {
        echo '</svg>';
    }
    private function showPolys() {
        foreach ($this->data['communePoly'] as $key => $commune) {
            echo '<polygon id="' . $key . '" name="' . $commune->nom . '" class="' . $commune->class . '" fill="' . $commune->fill . '"';
            echo ' stroke="' . $commune->stroke . '" stroke_width="' . $commune->stroke_width . '"';
            echo ' points="' . $commune->points . '"/>';
          }
    }
    private function onLoad() {
        echo "<script>";
        echo "onLoad(" . json_encode($this->data) . ")";
        echo "</script>";

    }
}

?>
  <script src="./carte/carte.js" type="text/javascript"></script>
