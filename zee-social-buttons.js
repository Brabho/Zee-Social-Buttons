/*
 * Zee Social Buttons
 * Version: 2.1
 * Develop By ClubCoding
 * Download/Clone: https://github.com/krishnaTORQUE/Zee-Social-Buttons
 */
window.addEventListener('load', function () {

    var zee_social_button_img = null;

    /*
     * Getting Share Details
     */

    var zee_social_buttons_share_details = {
        url_en: encodeURI(window.location.href),
        title: document.getElementsByTagName('title')[0].textContent,
        title_en: encodeURI(document.getElementsByTagName('title')[0].textContent)
    };

    /*
     * All Button Elements & Contents
     */

    var zee_social_buttons_elms = {
        facebook: '<div class="zee_social_sbutton zee_sbtn_facebook" title="Facebook"></div>',
        twitter: '<div class="zee_social_sbutton zee_sbtn_twitter" title="Twitter"></div>',
        googleplus: '<div class="zee_social_sbutton zee_sbtn_googleplus" title="Google+"></div>',
        linkedin: '<div class="zee_social_sbutton zee_sbtn_linkedin" title="LinkedIn"></div>',
        pinterest: '<div class="zee_social_sbutton zee_sbtn_pinterest" title="Pinterest"></div>',
        stumbleupon: '<div class="zee_social_sbutton zee_sbtn_stumbleupon" title="Stumbleupon"></div>',
        buffer: '<div class="zee_social_sbutton zee_sbtn_buffer" title="Buffer"></div>',
        reddit: '<div class="zee_social_sbutton zee_sbtn_reddit" title="Reddit"></div>',
        pocket: '<div class="zee_social_sbutton zee_sbtn_pocket" title="Pocket"></div>'
    };

    var zee_social_buttons = document.getElementsByClassName('zee-social-buttons');
    for (var i = 0; i < zee_social_buttons.length; i++) {

        var total_social_buttons, zee_social_buttons_content = '';

        /*
         * Loading giving buttons
         */

        if (zee_social_buttons[i].hasAttribute('data-social-buttons')) {

            var load_social_buttons = zee_social_buttons[i].getAttribute('data-social-buttons');
            load_social_buttons = load_social_buttons.split(',');
            total_social_buttons = load_social_buttons.length;

            /*
             * Add giving button contents
             */

            for (var j = 0; j < total_social_buttons; j++) {
                if (zee_social_buttons_elms[load_social_buttons[j]] !== undefined) {
                    zee_social_buttons_content += zee_social_buttons_elms[load_social_buttons[j]];
                }
            }

        } else {

            /*
             * If not giving buttons 
             * Adding all button contents
             */

            total_social_buttons = Object.keys(zee_social_buttons_elms).length;

            for (var j = 0; j < total_social_buttons; j++) {
                zee_social_buttons_content += zee_social_buttons_elms[Object.keys(zee_social_buttons_elms)[j]];
            }

        }

        /*
         * Calculaion Width
         */

        total_social_buttons = (100 / total_social_buttons);

        /*
         * Put Contents in Body
         */

        zee_social_buttons[i].innerHTML = zee_social_buttons_content;

        /*
         * Checking if the image already loaded
         */

        if (zee_social_button_img === null) {
            zee_social_button_img = zee_social_buttons[i].getAttribute('data-social-buttons-img');
        }

        var zee_social_sbutton = zee_social_buttons[i].getElementsByClassName('zee_social_sbutton');
        for (var k = 0; k < zee_social_sbutton.length; k++) {

            /*
             * Set the image and width
             */

            zee_social_sbutton[k].style.backgroundImage = 'url("' + zee_social_button_img + '")';
            zee_social_sbutton[k].style.width = total_social_buttons + '%';

            /*
             * Click Function
             */

            zee_social_sbutton[k].addEventListener('click', function () {
                var social_buttons_link = null;

                /*
                 * Getting the link
                 */

                switch (this.getAttribute('title')) {

                    case 'Facebook':
                        social_buttons_link = 'https://www.facebook.com/sharer/sharer.php?u=' + zee_social_buttons_share_details['url_en'] + '&title=' + zee_social_buttons_share_details['title'];
                        break;

                    case 'Twitter':
                        social_buttons_link = 'https://twitter.com/intent/tweet?url=' + zee_social_buttons_share_details['url_en'] + '&text=' + zee_social_buttons_share_details['title_en'];
                        break;

                    case 'Google+':
                        social_buttons_link = 'https://plus.google.com/share?url=' + zee_social_buttons_share_details['url_en'];
                        break;

                    case 'LinkedIn':
                        social_buttons_link = 'http://www.linkedin.com/shareArticle?url=' + zee_social_buttons_share_details['url_en'] + '&title=' + zee_social_buttons_share_details['title'];
                        break;

                    case 'Pinterest':
                        social_buttons_link = 'https://www.pinterest.com/pin/create/button/?url=' + zee_social_buttons_share_details['url_en'];
                        break;

                    case 'Stumbleupon':
                        social_buttons_link = 'http://www.stumbleupon.com/submit?url=' + zee_social_buttons_share_details['url_en'] + '&title=' + zee_social_buttons_share_details['title'];
                        break;

                    case 'Buffer':
                        social_buttons_link = 'http://bufferapp.com/add?url=' + zee_social_buttons_share_details['url_en'];
                        break;

                    case 'Reddit':
                        social_buttons_link = 'http://www.reddit.com/submit?url=' + zee_social_buttons_share_details['url_en'] + '&title=' + zee_social_buttons_share_details['title'];
                        break;

                    case 'Pocket':
                        social_buttons_link = 'https://getpocket.com/save?url=' + zee_social_buttons_share_details['url_en'] + '&title=' + zee_social_buttons_share_details['title'];
                        break;
                }

                if (social_buttons_link !== null) {
                    window.open(social_buttons_link, '_blank');
                }

            }, false);

        }

        /*
         * Finally Showing Social Buttons
         */

        zee_social_buttons[i].style.visibility = 'visible';

    }
}, false);