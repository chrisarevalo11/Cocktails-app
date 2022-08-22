import { Component, OnInit } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.css']
})
export class CoctelComponent implements OnInit {
  randomCoctel: any;
  popularCocktails: any[] = [];
  ingredients: any[] = [];
  instructions: any = "";

  constructor(private coctelesService: CoctelesService) { }

  infoCoctel(nombre:string): void {
    this.coctelesService.getCoctel(nombre).subscribe(data => {
      this.randomCoctel = data;
      this.ingredients = this.getIngredientes(data);
      this.instructions = this.getInstructions(data);
      Swal.fire({
        title: this.randomCoctel.drinks[0].strDrink,
        html:
        '<b>Ingredients: </b>'+
        this.ingredients+'.'+
        '<br><br>'+
        '<b>Instructions: </b>'+
        this.instructions+'.',
        imageUrl: this.randomCoctel.drinks[0].strDrinkThumb,
        imageWidth: 250,
        imageAlt: 'coctel image',
        showCloseButton: true,
        backdrop: `
          rgba(0,0,123,0.4)
        `,
        width: 600,
      })
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

  private cargarListaPopulares(): void {
    for (let i=0; i<6; i++) {
      this.coctelesService.getRandomCoctel().subscribe(data => {
        this.randomCoctel = data;
        this.popularCocktails[i] = this.randomCoctel;
        this.ingredients = this.getIngredientes(data);
      });
    }
  }

  ngOnInit(): void {
    this.cargarListaPopulares();
  }

}
