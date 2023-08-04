import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';

const resolveRoutes = (route) => {
  const content = null || document.getElementById('Content');

  if (route === '#/' || route === '') {
    content.innerHTML = Home();
  } else if (route === '#/menu/') {
    content.innerHTML = Menu();
  } else if (route === '#/contact/') {
    content.innerHTML = Contact();
  } else {
    content.innerHTML = Error404();
  }
};

export default resolveRoutes;
