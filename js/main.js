requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min','jquery.min'],
        bootstrap: 'bootstrap.min'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});

requirejs([
    'jquery',
    'bootstrap'
    ], function($, _bootstrap){
        return {};
});