function vaildateUserName(){ var userName = document.forms['signup-form']['user_name'].value; if(userName==""){ return false; }else if(userName.length<=5){ return false; }else{ return true; } } function vaildateFirstName(){ var firstName = document.forms['signup-form']['first_name'].value; if(firstName==""){ return false; }else{ return true; } } function vaildateLastName(){ var lastName = document.forms['signup-form']['last_name'].value; if(lastName==""){ return false; }else{ return true; } } function vaildateEmail(){ var email = document.forms['signup-form']['email'].value; if(email==""){ return false; }else if (!((email.indexOf(".") > 0) && (email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(email)){ return false; }else { return true; } } function validatePassword(){ var userPassword = document.forms['signup-form']['password'].value; window.GuserPassword=userPassword; if(userPassword==""){ return false; }else if(userPassword.length<=7){ return false; }else { alert("ok!"); return true; } } function validateConfirmPassword(){ var confirmPassword = document.forms['signup-form']['confirm_password'].value; if(confirmPassword==""){ return false; }else if (confirmPassword.length<=7){ return false; }else if (confirmPassword.length>7){ if(window.GuserPassword==confirmPassword){ alert("GOOD"); return true; } return false; }else{ alert("NOT VALUE "); return false; } } function validateArticleName(){ var articleName = document.forms['article-form']['article-name'].value; if(articleName==""){ return false; }else{ return true; } } function validateArticleContent(){ var articleContent = document.forms['article-form']['article-content'].value; if(articleContent==""){ return false; }else{ return true; } } function vaildateUpdatedEmail(){ var email = document.forms['update-form']['email'].value; if(email==""){ return false; }else if (!((email.indexOf(".") > 0) && (email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(email)){ return false; }else { return true; } } function validate(){ if(vaildateUserName() && vaildateFirstName() && vaildateLastName() && validatePassword() && validateConfirmPassword()){ return true; }else{ return false; } } function validateArticle(){ if(validateArticleName() && validateArticleContent()){ return true; }else{ alert("Article Name or Content missing"); return false; } } function validateCategory(){ var categoryName = document.forms['category-form']['category-name'].value; if(categoryName==""){ return false; }else if((categoryName.length>0) && /^[a-zA-Z ]*$/.test(categoryName) ) { return true; }else{ return false; } }