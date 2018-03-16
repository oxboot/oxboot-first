<?php

add_action('muplugins_loaded', function () {
    $plugin = new Oxboot\Framework\OxbootAdmin\Menu();
    $plugin->init();
});
