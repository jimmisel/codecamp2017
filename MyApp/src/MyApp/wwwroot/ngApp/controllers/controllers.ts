namespace MyApp.Controllers {
    const apiURL = '/api/movies/search/';
    export class HomeController {

        public movies;
        public search;
        fetch() {
            if (this.search) {
                console.log('searching');
                this.$http.get(apiURL + this.search)
                    .then((results) => {
                        this.movies = results.data;
                    });
            }
        }

        constructor(private $http: ng.IHttpService) {
        }
    }

    export class employeeController {
        public firstName = '';
        public lastName = '';
        public age = 0;
        public type = '';
      //  public salary = 0;

        public add() {
            console.log(`Here is your info 
name: ${this.firstName} ${this.lastName} 
Age: ${this.age} 
Employment type: ${this.type} `
);
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
