<template>
  <div class="home">
    <v-row v-if="groupmates.length > 0">
      <v-col>
        <p id="titlePhrase">EECS 440 Group Finder</p>
        <v-card class="mx-auto" max-width="550">
          <v-alert outlined color="#ee44aa">
            <v-card-text>
              <p class="display-1 text--primary">Your Group:</p>
              <v-divider></v-divider>
            </v-card-text>
            <v-card-text>
              <v-col align="start">
                <v-list flat>
                  {{ groupmates.length }} / 6 Groupmates have joined:
                  <v-list-item v-for="(gm, i) in groupmates" :key="i">
                    <v-list-item-icon>
                      <v-icon size="15">fa-users</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-subtitle>{{ gm }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions
              align="center"
              :loading="loading"
              loading-text="Loading... Please wait"
            >
              <v-btn text color="Primary" to="/join"> Join a different </v-btn>
              <v-btn text color="Primary" to="/create"> Register new </v-btn>
            </v-card-actions>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
    <div v-else>
      <v-row>
        <v-col>
          <p id="titlePhrase">EECS 440 Group Finder</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="500" height="300" to="/join">
            <v-alert outlined color="#ee44aa" height="300">
              <v-card-title class="justify-center">
                <p class="display-1 text--primary">Join a group!</p>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="display-5 text--primary">
                Search through already registered partial groups to find a group
                to join!
              </v-card-text>
            </v-alert>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="500" height="300" to="/create">
            <v-alert outlined color="#ee44aa" height="300">
              <v-card-title class="justify-center">
                <p class="display-1 text--primary">Create a group!</p>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="display-5 text--primary">
                Want to create your own group? Already have a few group members
                but are looking to add more?
              </v-card-text>
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loading: true,
      groupmates: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
  },
  watch: {
    user: {
      deep: true,
      async handler(newVal) {
        //if (oldVal == newVal) return;
        if (!newVal) {
          this.groupmates = [];
          return;
        }
        const response = await axios.get(
          "http://127.0.0.1:8000/api/groups/" + newVal.email
        );
        let element = response.data["group"];
        this.groupmates = [];
        if (element == null) {
          return;
        }
        if (element["groupmate1"] !== "")
          this.groupmates.push(element["groupmate1"]);
        if (element["groupmate2"] !== "")
          this.groupmates.push(element["groupmate2"]);
        if (element["groupmate3"] !== "")
          this.groupmates.push(element["groupmate3"]);
        if (element["groupmate4"] !== "")
          this.groupmates.push(element["groupmate4"]);
        if (element["groupmate5"] !== "")
          this.groupmates.push(element["groupmate5"]);
        if (element["groupmate6"] !== "")
          this.groupmates.push(element["groupmate6"]);
      },
    },
  },
};
</script>

<style scoped>
#titlePhrase {
  font-size: 30px;
}

html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
