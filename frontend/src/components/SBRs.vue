<template>
    <v-card>
        <v-card-title>
            Groups Looking for Members:
            <v-spacer></v-spacer>
            <!-- <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field> -->
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="10"
            class="elevation-1"
            :loading="loading" 
            loading-text="Loading... Please wait"
            show-expand
            :expanded.sync="expanded"
            item-key="groupID"
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <v-row>
                        <v-col align="start">
                            <v-list-item flat two-line>
                            <v-list-item-content>
                            <v-list-item-title>Availability</v-list-item-title>
                            <v-row>
                                <v-col>
                                    <v-card
                                    class="justify-center"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.monday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">M</p>
                                    </v-layout>
                                    
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card
                                    class="mx-auto"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.tuesday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">T</p>
                                    </v-layout>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card
                                    class="mx-auto"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.wednesday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">W</p>
                                    </v-layout>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card
                                    class="mx-auto"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.thursday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">T</p>
                                    </v-layout>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card
                                    class="mx-auto"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.friday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">F</p>
                                    </v-layout>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card
                                    class="mx-auto"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.saturday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">S</p>
                                    </v-layout>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card
                                    class="mx-auto"
                                    height="30"
                                    width="30"
                                    outlined
                                    :color=item.sunday_color
                                    >
                                    <v-layout justify-center>
                                        <p style="color:white;">S</p>
                                    </v-layout>
                                    </v-card>
                                </v-col>
                                
                            </v-row>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item flat two-line>
                            <v-list-item-content>
                            <v-list-item-title>Synchronous vs. Asynchronous Work</v-list-item-title>
                            <v-row>
                                <v-col lg="12">
                                    <v-slider
                                    :value=item.async
                                    readonly
                                    track-color="purple"
                                    always-dirty
                                    min="0"
                                    max="100"
                                    >
                                    <template v-slot:prepend> Together </template>

                                    <template v-slot:append> Independent </template>
                                    </v-slider>
                                </v-col>
                            </v-row>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item flat two-line>
                            <v-list-item-content>
                            <v-list-item-title>Starting assignments</v-list-item-title>
                            <v-row>
                                <v-col lg="12">
                                    <v-slider
                                    :value=item.procast
                                    readonly
                                    track-color="purple"
                                    always-dirty
                                    min="0"
                                    max="100"
                                    >
                                    <template v-slot:prepend> Immediately </template>

                                    <template v-slot:append> Eventually </template>
                                    </v-slider>
                                </v-col>
                            </v-row>
                            </v-list-item-content>
                        </v-list-item>
                        
                        <v-btn small color="primary" class="mb-2 ml-3 mt-1" @click="addUser(item); addUserPersonal(item);">Join Group</v-btn>
                        <v-btn small color="grey" class="mb-2 ml-3 mt-1" @click="removeUser(item)">Leave Group</v-btn>
                        </v-col>

                        <v-col align="start">
                            <v-list-item flat two-line>
                                <v-list-item-content>
                                <v-list-item-title>Other information about the group:</v-list-item-title>
                                <v-list-item-subtitle>{{item.other}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>

                        <v-col align="start">
                            <v-list flat>
                            {{item.groupmates.length}} / 6 Groupmates have already joined.
                            <v-list-item
                                v-for="(gm, i) in item.groupmates"
                                :key="i"
                            >
                                <v-list-item-icon>
                                    <v-icon size="15">fa-users</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-subtitle>{{gm}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        </v-col>

                        
                    </v-row>              
                </td>
            </template>
        </v-data-table>
    </v-card>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'SBRs',
  data () {
    return {
      loading: true,
      expanded: [],
      headers: [
        {
          text: 'Group ID',
          align: 'start',
          sortable: true,
          value: 'groupID',
        },
        { text: 'Group Members', value: 'groupcount' },
        { text: 'Location', value: 'location' },
        { text: 'Time Zone', value: 'timezone' },
      ],
      items: []
    }
  },
  async mounted () {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/groups/");
        this.items = response.data["groups"];
        this.items.forEach(element => {
            if (element['inPerson'] && element['virtual'] ) {
                element['location'] = 'Prefer remote and in person.';
            }
            else if (element['inPerson']) {
                element['location'] = 'Prefer in person work.'
            }
            else {
                element['location'] = 'Prefer remote work.'
            }
            let groupmates = [];
            if (element['groupmate1'] !== '') groupmates.push(element['groupmate1']);
            if (element['groupmate2'] !== '') groupmates.push(element['groupmate2']);
            if (element['groupmate3'] !== '') groupmates.push(element['groupmate3']);
            if (element['groupmate4'] !== '') groupmates.push(element['groupmate4']);
            if (element['groupmate5'] !== '') groupmates.push(element['groupmate5']);
            if (element['groupmate6'] !== '') groupmates.push(element['groupmate6']);
            groupmates.push("alexjalk");
            groupmates.push("alexjalk");
            element['groupmates'] = groupmates;
            element['groupcount'] = groupmates.length + " / 6 group members.";
            if (element['other'] == "") {
                element['other'] = "No other group information provided.";
            }
            element['monday'] ? element['monday_color'] = "green" : element['monday_color'] = "red";
            element['tuesday'] ? element['tuesday_color'] = "green" : element['tuesday_color'] = "red";
            element['wednesday'] ? element['wednesday_color'] = "green" : element['wednesday_color'] = "red";
            element['thursday'] ? element['thursday_color'] = "green" : element['thursday_color'] = "red";
            element['friday'] ? element['friday_color'] = "green" : element['friday_color'] = "red";
            element['saturday'] ? element['saturday_color'] = "green" : element['saturday_color'] = "red";
            element['sunday'] ? element['sunday_color'] = "green" : element['sunday_color'] = "red";
        });
        this.loading = false;
    }
    catch (error) {
        console.log(error)
    }
  },
  methods: {
      async addUser(item) {
        try {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }                
            await axios.patch('<insert backend api url here>' + item.host, {
                username: "<insert username>",
            }, config)
            .then(function (response) {
                console.log(response);
            });
            this.overlayLoad = false;
            item.groupmates.push("<insert email>");

        }
        catch (error) {
            console.log(error)
            this.overlayLoad = false;
        }
      },
      async addUserPersonal(item) {
        try {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }                
            await axios.patch('<insert backend api url here>', {
                newGroup: item.host,
            }, config)
            .then(function (response) {
                console.log(response);
            });
        }
        catch (error) {
            console.log(error)
            this.overlayLoad = false;
        }
      },
      async removeUser(item) {
        const index = item.groupmates.indexOf("<insert email>");
        item.groupmates.splice(index, 1);
      }
  },
}
</script>

<style scoped>

</style>