import Header from '../template/Header';
import resolveRoutes from '../utils/resolveRoutes';

const router = async () => {
  const header = null || document.getElementById('Header');
  header.innerHTML = await Header();

  resolveRoutes(window.location.hash);
};

export default router;
