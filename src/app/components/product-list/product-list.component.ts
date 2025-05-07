import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule,FormsModule],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products:any[]=[];
  constructor(private productService:ProductService){}
  ngOnInit():void{
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    });
  }

  deleteProduct(id:number){
      this.productService.deleteProduct(id).subscribe(()=>{
        this.products=this.products.filter(product=>product.id!==id);
      });
  }
}
