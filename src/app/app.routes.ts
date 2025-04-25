import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarComponent } from './pages/car/car.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    {path: '', component:ProductosComponent, title: "productos"},
    {path: 'car', component:CarComponent, title: "carrito"},
    {path: 'confirm', component:ConfirmComponent, title: "inventario disponible"},
    {path: 'checkout', component:CheckoutComponent, title: "Checkout"},
];
