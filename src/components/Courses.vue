<template>
  <div id = 'courses'>
      <v-container>
              <v-layout column>
                  <v-carousel>
                      <v-carousel-item
                          src="/images/courses1.jpg"
                          cover
                      ></v-carousel-item>

                      <v-carousel-item
                          src="/images/courses2.jpg"
                          cover
                      ></v-carousel-item>

                      <v-carousel-item
                          src="/images/courses3.jpg"
                          cover
                      ></v-carousel-item>
                  </v-carousel>
                  </v-layout>
                  <v-layout>
                  <v-container>
                      <v-row align="center" justify="center">
                          <div class="d-flex align-center flex-column">
                              <div class="text-subtitle-2">With props</div>

                              <div class="mt-4 text-subtitle-2">With slots</div>

                              <div class="mt-4 text-subtitle-2">With markup</div>

                              <v-card width="400">
                              <v-card-item>
                                  <v-card-title>{{componentTitle}}</v-card-title>

                                 
                              </v-card-item>

                              <v-card-text>
                                <v-list
                                    :items="courses"
                                    item-title="courseName"
                                    item-value="id"
                                ></v-list>
                               </v-card-text>
                               <v-card width="400">
                                <v-card-item>
                                    <v-card-title>{{ componentTitle }}</v-card-title>
                                </v-card-item>

                                <v-card-text>
                                    <v-table>
                                        <thead>
                                        <tr>
                                            <th class="text-left">
                                            Name
                                            </th>
                                           
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr
                                            v-for="users in myusers"
                                            :key="users.id"
                                        >
                                            <td>
                                                <v-btn to="/newcomponent" color="primary">{{ users.username }}</v-btn>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </v-table>
                                </v-card-text>
                                </v-card>
                              </v-card>
                          </div>
                      </v-row>
                  </v-container>
              </v-layout>
          </v-container>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      courses:[
        {
            id: 1,
            courseName: 'Financial Economics'
        },
        {
            id: 2,
            courseName: 'Psychology'
        },
        {
            id: 3,
            courseName: 'Computer Science'
        },
        {
            id: 4,
            courseName: 'Financial Engineering'
        },
        {
            id: 5,
            courseName: 'Medicine'
        },
        {
            id: 6,
            courseName: 'Education'
        },
        {
            id: 7,
            courseName: 'Architecture'
        },
        {
            id: 8,
            courseName: 'Forestry'
        },
        {
            id: 9,
            courseName: 'Law'
        },
        {
            id: 10,
            courseName: 'Hospitality'
        }
    ],
    myUsers:{},
    componentTitle: 'Courses at Strath Uni'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    },
    async getMyUsers(){
        const apiUrl = 'http://127.0.0.1:8000/api/users'; // Replace with your API endpoint URL

        axios.get(apiUrl)
            .then((response) => {
                this.myusers = response.data;
                console.log(this.myusers)

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(this.courses)
    this.getMyUsers
  }
}
</script>

