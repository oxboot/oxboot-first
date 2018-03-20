<?php

if (class_exists('\Oxboot\Framework\Application')) {
    add_action('muplugins_loaded', function () {
        $plugin = new Oxboot\Framework\OxbootAdmin\ControlPanel();
        $plugin->init();
    });
}
