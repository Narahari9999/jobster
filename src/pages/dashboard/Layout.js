import { Navbar, SmallSidebar, BigSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/Dashboard';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Layout;
