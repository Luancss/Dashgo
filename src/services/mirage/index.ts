import { createServer, Factory, Model} from 'miragejs'


type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return  `User ${i + 1}`
        },
        email() {
          return `Emailteste@gmail.com`
        },
        createdAt() {
          return new Date()
        }
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace ='api'
      this.timing = 750;
      
      this.get('/users');
      this.post('/users')

      this.namespace = '';
      this.passthrough()
    }
  })

    return server;
}