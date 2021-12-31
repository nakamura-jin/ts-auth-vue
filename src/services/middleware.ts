import Cookie from 'js-cookie'

export default {
  auth(to: any, from: any , next: any) {
    const token = Cookie.get('_myapp_token');
    
    if (!token) {
      next('/login');
    }

    next();
  }
}