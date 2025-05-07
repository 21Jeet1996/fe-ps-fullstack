import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule,RouterModule],
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent implements OnInit{
  product:any={name:'',price:0};
  isEditable:boolean=false;

  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
          this.isEditable=true;
          this.productService.getProductById(Number(id)).subscribe(data=>{
            this.product=data;
          });
      }
  }

  saveProduct(){
    if(this.isEditable){
      this.productService.updateProduct(this.product.id, this.product).subscribe(()=>{
        this.router.navigate(['/products']);
      });
    }else{
      this.productService.createProduct(this.product).subscribe(()=>{
        this.router.navigate(['/products']);
      });
    }
  }
}
