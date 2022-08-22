import { Component, OnInit } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';
import { Coctel } from 'src/app/interfaces/Coctel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  coctelName: Coctel = {
    name:''
  };
  coctel: any;
  ingredients: any[] = [];
  instructions: any = "";
  constructor(private coctelesService:CoctelesService) { }
  
  cargarCoctel(nombre:string): void {
    this.coctelesService.getCoctel(nombre).subscribe(data => {
      this.coctel = data;
      if (this.coctel.drinks != null){
        this.ingredients = this.getIngredientes(data);
        this.instructions = this.getInstructions(data);
        Swal.fire({
          title: this.coctel.drinks[0].strDrink,
          html:
          '<b>Ingredients: </b>'+
          this.ingredients+'.'+
          '<br><br>'+
          '<b>Instructions: </b>'+
          this.instructions+'.',
          imageUrl: this.coctel.drinks[0].strDrinkThumb,
          imageWidth: 250,
          imageAlt: 'coctel image',
          showCloseButton: true,
          backdrop: `
            rgba(0,0,123,0.4)
          `,
          width: 600,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This cocktail was not found!',
        });
      }
      
    });
  }

  getInstructions(observer:any): any {
    return this.instructions = observer.drinks[0].strInstructions;
  }

  getIngredientes(observer:any): any{
    if (observer.drinks[0].strIngredient1 != null) this.ingredients[0] = 
    observer.drinks[0].strIngredient1;

    if (observer.drinks[0].strIngredient2 != null) this.ingredients[1] = 
    observer.drinks[0].strIngredient2;

    if (observer.drinks[0].strIngredient3 != null) this.ingredients[2] = 
    observer.drinks[0].strIngredient3;

    if (observer.drinks[0].strIngredient4 != null) this.ingredients[3] = 
    observer.drinks[0].strIngredient4;

    if (observer.drinks[0].strIngredient5 != null) this.ingredients[4] = 
    observer.drinks[0].strIngredient5;

    if (observer.drinks[0].strIngredient6 != null) this.ingredients[5] = 
    observer.drinks[0].strIngredient6;

    if (observer.drinks[0].strIngredient7 != null) this.ingredients[6] = 
    observer.drinks[0].strIngredient7;

    if (observer.drinks[0].strIngredient8 != null) this.ingredients[7] = 
    observer.drinks[0].strIngredient8

    if (observer.drinks[0].strIngredient9 != null) this.ingredients[8] = 
    observer.drinks[0].strIngredient9;

    if (observer.drinks[0].strIngredient10 != null) this.ingredients[9] = 
    observer.drinks[0].strIngredient10;

    if (observer.drinks[0].strIngredient11 != null) this.ingredients[10] = 
    observer.drinks[0].strIngredient11;

    if (observer.drinks[0].strIngredient12 != null) this.ingredients[11] = 
    observer.drinks[0].strIngredient12;

    if (observer.drinks[0].strIngredient13 != null) this.ingredients[12] = 
    observer.drinks[0].strIngredient13;

    if (observer.drinks[0].strIngredient14 != null) this.ingredients[13] = 
    observer.drinks[0].strIngredient14;

    if (observer.drinks[0].strIngredient15 != null) this.ingredients[14] = 
    observer.drinks[0].strIngredient15;
    
    return this.ingredients;
  }

  ngOnInit(): void {
  }

}
