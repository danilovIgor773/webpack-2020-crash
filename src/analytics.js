import * as $ from 'jquery';

function createAnalytics(){
    let counter = 0;
    let isDestroyed = false;
    const clickHandler = () => counter ++;

    $(document).on("click", clickHandler);

    return {
        destroy(){
            $(document).off("click", clickHandler);
            isDestroyed = true; 
        },

        getClicks(){
            if(isDestroyed){
                return `Analytics is destroyed. Total click last time: ${counter}`
            }
            return `User clicked ${counter} times`;
        }
    }
}

window.analytics = createAnalytics();