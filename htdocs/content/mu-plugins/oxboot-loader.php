<?php

add_action('muplugins_loaded', function () {
    $plugin = new Oxboot\Framework\OxbootAdmin\ControlPanel();
    $plugin->init();
});
