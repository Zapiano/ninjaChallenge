function requestButtonHandler(e) {
  if (validateFields()) {
    document.getElementById('user-fields').style.display = "block";
    document.getElementById('request-fields').style.display = "none";

    document.getElementById('request-fields__button').style.display = "none";
    document.getElementById('user-fields__button').style.display = "block";

    var activeBreadcrumb = document.getElementsByClassName("breadcrumb-step active")[0];
    var inactiveBreadcrumb = document.getElementsByClassName("breadcrumb-step inactive")[0];

    activeBreadcrumb.className = 'breadcrumb-step inactive';
    inactiveBreadcrumb.className = 'breadcrumb-step active';
  }

  e.preventDefault();
};

function userButtonHandler(e) {
  if (validateFields()) {
    document.getElementById('user-fields').style.display = "none";
    document.getElementById('request-fields').style.display = "block";

    document.getElementById('request-fields__button').style.display = "block";
    document.getElementById('user-fields__button').style.display = "none";

    var activeBreadcrumb = document.getElementsByClassName("breadcrumb-step active")[0];
    var inactiveBreadcrumb = document.getElementsByClassName("breadcrumb-step inactive")[0];

    activeBreadcrumb.className = 'breadcrumb-step inactive';
    inactiveBreadcrumb.className = 'breadcrumb-step active';
  }

  e.preventDefault();
};

