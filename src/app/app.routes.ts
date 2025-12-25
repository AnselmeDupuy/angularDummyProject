import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
    {path: '', component: UsersComponent},
    {path: 'users/:id', component: UserComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostComponent},
];
