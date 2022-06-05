  //https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response#score_tag
  
  
  function checkForPolarity(scoreTag){
    let show;
    switch (scoreTag){
        case 'P+':
            show = 'strong positive';
            break;
        case 'P':
            show = 'positive';
            break;
        case 'NEW':
            show = 'neutral';
            break;
        case 'N':
            show = 'negative';
            break;
        case 'N+':
            show = 'strong negative';
            break;
        case 'NONE':
            show = 'sentiment not found';
    }
    return show.toUpperCase();
}

export {checkForPolarity}