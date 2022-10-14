var isBuilder = $('html').hasClass('is-builder');
if (!isBuilder) {
    if (typeof window.initSwitchArrowPlugin === 'undefined'){
        window.initSwitchArrowPlugin = true;
        $(document).ready(function() {
            if ($('.accordionStyles').length!=0) {
                    $('.accordionStyles .card-header a[role="button"]').each(function(){
                        if(!$(this).hasClass('collapsed')){
                            $(this).addClass('collapsed');
                        }
                    });
                }
        });

        $('.accordionStyles .card-header a[role="button"]').click(function(){
            var $id = $(this).closest('.accordionStyles').attr('id'),
                $iscollapsing = $(this).closest('.card').find('.panel-collapse');

            if (!$iscollapsing.hasClass('collapsing')) {
                if ($id.indexOf('toggle') != -1){
                    if ($(this).hasClass('collapsed')) {
                        $(this).find('span.sign').removeClass('kjc-arrow-down').addClass('kjc-arrow-up'); 
                    }
                    else{
                        $(this).find('span.sign').removeClass('kjc-arrow-up').addClass('kjc-arrow-down'); 
                    }
                }
                else if ($id.indexOf('accordion')!=-1) {
                    var $accordion =  $(this).closest('.accordionStyles ');
                
                    $accordion.children('.card').each(function() {
                        $(this).find('span.sign').removeClass('kjc-arrow-up').addClass('kjc-arrow-down'); 
                    });
                    if ($(this).hasClass('collapsed')) {
                        $(this).find('span.sign').removeClass('kjc-arrow-down').addClass('kjc-arrow-up'); 
                    }
                }
            }
        });
    }
};