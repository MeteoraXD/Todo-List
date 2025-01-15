import { Outlet, RouteObject } from 'react-router-dom';


import RegistrationView from '@/components/ui/Auth/AuthView/RegistrationView';
import TodoView from '@/components/ui/TodoView';
import LogInView from '@/components/ui/Auth/AuthView/LoginView';

const AuthRoutes: RouteObject = {


  element: <Outlet/>,
  children: [

    {
      path:"login",
      element: <LogInView/>
    },
    {
      path: "registration-view",
      element: <RegistrationView />
    },
    {
      path: "todo",
      element: <TodoView />
    },

  ]
};

export default AuthRoutes;
