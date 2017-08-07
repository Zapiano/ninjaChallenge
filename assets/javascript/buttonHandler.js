function requestButtonHandler(e) {
  if (validateFields()) {
    document.getElementById('user-fields').style.display = 'block';
    document.getElementById('request-fields').style.display = 'none';

    document.getElementById('request-fields__button').style.display = 'none';
    document.getElementById('user-fields__button').style.display = 'block';

    toggleBreadcrumb()
  }

  e.preventDefault();
};

function userButtonHandler(e) {
  if (validateFields()) {
    document.getElementById('user-fields').style.display = 'none';
    document.getElementById('request-fields').style.display = 'block';

    document.getElementById('request-fields__button').style.display = 'block';
    document.getElementById('user-fields__button').style.display = 'none';

    toggleBreadcrumb()
  }

  e.preventDefault();
};

function toggleBreadcrumb() {
    var activeBreadcrumb = document.getElementsByClassName('breadcrumb-step active')[0];
    var inactiveBreadcrumb = document.getElementsByClassName('breadcrumb-step inactive')[0];

    activeBreadcrumb.classList.add('inactive');
    activeBreadcrumb.classList.remove('active');

    inactiveBreadcrumb.classList.add('active');
    inactiveBreadcrumb.classList.remove('inactive');
}
