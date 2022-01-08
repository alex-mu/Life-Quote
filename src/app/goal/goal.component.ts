import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent  {
  goals: Goal[] = [
    new Goal(1, 'Elon musk', 'The beginning is always the hardest, the ending the sweetest',new Date(2020,3,14)),
    new Goal(2,'Kim Jung Un','Defend yourself and your country',new Date(2019,6,9)),
    new Goal(3,'Alexander Mureithi','To die is a one day activity, to live is every moment',new Date(2022,1,12)),
    
  ];
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: boolean, index: any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

}



