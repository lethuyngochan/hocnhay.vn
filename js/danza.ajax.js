/*

[Main Script]

Project: Themeholy
Version: 1.0
Author : danza.com

*/
;(function($){
    "use strict";
/* ------------------------------------------------------------------------- *

    * Mail Chimp ajax

    * ------------------------------------------------------------------------- */

    var $widgetsubscribeForm = $('form.footer-newsletter');

    // Subscribe Shortcode MailChimp ajax
    $widgetsubscribeForm.on('submit',function(e){
        let $emailAdd = $(this).find('input[type="email"]').val();
        $.ajax({
            type: 'POST',
            url: danzaajax.action_url,
            data:{
                sectsubscribe_email: $emailAdd,
                security: danzaajax.nonce,
                action: 'danza_subscribe_ajax'
            },

            success: function(data){
                $('form.footer-newsletter input[type="email"]').val('');
                $('.footer-newsletter').append(data);
            },

            error: function(){
                $('.footer-newsletter').append('<div class="alert alert-danger mt-2" role="alert">Something Goes Wrong</div>');

            }
        });
        e.preventDefault();
    });

})(jQuery);