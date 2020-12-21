<template>
  <v-card>
    <v-card-title>
      Groups Looking for Members:
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
      item-key="groupID"
      show-expand
      :expanded.sync="expanded"
      max-width="1000"
      @click:row="expandRow"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row>
            <v-col align="start">
              <v-list-item flat two-line>
                <v-list-item-content>
                  <v-list-item-title>Availability:</v-list-item-title>
                  <v-row>
                    <v-col>
                      <v-card
                        class="justify-center"
                        height="30"
                        width="30"
                        outlined
                        :color="item.monday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">M</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="mx-auto"
                        height="30"
                        width="30"
                        outlined
                        :color="item.tuesday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">T</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="mx-auto"
                        height="30"
                        width="30"
                        outlined
                        :color="item.wednesday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">W</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="mx-auto"
                        height="30"
                        width="30"
                        outlined
                        :color="item.thursday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">T</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="mx-auto"
                        height="30"
                        width="30"
                        outlined
                        :color="item.friday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">F</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="mx-auto"
                        height="30"
                        width="30"
                        outlined
                        :color="item.saturday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">S</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="mx-auto"
                        height="30"
                        width="30"
                        outlined
                        :color="item.sunday_color"
                      >
                        <v-layout justify-center>
                          <p style="color: white">S</p>
                        </v-layout>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>

              <v-list-item flat two-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Prefer synchronous vs. asynchronous
                    work:</v-list-item-title
                  >
                  <v-row>
                    <v-col lg="12">
                      <v-slider
                        :value="item.async"
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
                  <v-list-item-title
                    >Prefer to start assignments:</v-list-item-title
                  >
                  <v-row>
                    <v-col lg="12">
                      <v-slider
                        :value="item.procast"
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

              <v-btn
                v-if="!item.groupmates.includes(email)"
                small
                color="primary"
                class="mb-2 ml-3 mt-1"
                @click="addUser(item, email)"
                >Join Group</v-btn
              >
              <v-btn
                v-else
                small
                color="grey"
                class="mb-2 ml-3 mt-1"
                @click="removeUser(item, email)"
                >Leave Group</v-btn
              >
            </v-col>

            <v-col align="start">
              <v-list-item flat two-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Other information about the group:</v-list-item-title
                  >
                  <p>
                      {{ item.other }}
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col align="start">
              <v-list flat>
                {{ item.groupmates.length }} / 6 Groupmates have already joined:
                <v-list-item v-for="(gm, i) in item.groupmates" :key="i">
                  <v-list-item-icon>
                    <v-icon size="15">fa-users</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{ gm }}</v-list-item-subtitle>
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
import Vue from "vue";
import axios from "axios";
import auth from "@/auth";
export default {
  name: "SBRs",
  data() {
    return {
      loading: true,
      expanded: [],
      user: auth.user(),
      email: auth.user().email,
      headers: [
        {
          text: "Group ID",
          align: "start",
          sortable: true,
          value: "groupID",
        },
        { text: "Group Members", value: "groupcount" },
        { text: "Location", value: "location" },
        { text: "Time Zone", value: "timezone" },
      ],
      items: [],
    };
  },
  async mounted() {
    try {
      const token = await this.user.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get("https://api.group-finder.com/groups/", config);
      this.items = response.data;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i]["inPerson"] && this.items[i]["virtual"]) {
          Vue.set(this.items[i], "location", "Prefer remote and in person.");
        } else if (this.items[i]["inPerson"]) {
          Vue.set(this.items[i], "location", "Prefer in person work.");
        } else {
          Vue.set(this.items[i], "location", "Prefer remote work.");
        }
        Vue.set(
          this.items[i],
          "groupcount",
          String(this.items[i].groupmates.length) + " / 6 group members."
        );

        if (this.items[i]["other"] == "") {
          Vue.set(
            this.items[i],
            "other",
            "No other group information provided."
          );
        }
        this.items[i]["monday"]
          ? Vue.set(this.items[i], "monday_color", "green")
          : Vue.set(this.items[i], "monday_color", "red");
        this.items[i]["tuesday"]
          ? Vue.set(this.items[i], "tuesday_color", "green")
          : Vue.set(this.items[i], "tuesday_color", "red");
        this.items[i]["wednesday"]
          ? Vue.set(this.items[i], "wednesday_color", "green")
          : Vue.set(this.items[i], "wednesday_color", "red");
        this.items[i]["thursday"]
          ? Vue.set(this.items[i], "thursday_color", "green")
          : Vue.set(this.items[i], "thursday_color", "red");
        this.items[i]["friday"]
          ? Vue.set(this.items[i], "friday_color", "green")
          : Vue.set(this.items[i], "friday_color", "red");
        this.items[i]["saturday"]
          ? Vue.set(this.items[i], "saturday_color", "green")
          : Vue.set(this.items[i], "saturday_color", "red");
        this.items[i]["sunday"]
          ? Vue.set(this.items[i], "sunday_color", "green")
          : Vue.set(this.items[i], "sunday_color", "red");
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  },
  methods: {
    expandRow (item) {
        this.expanded = item === this.expanded[0] ? [] : [item]
    },
    async addUser(item, email) {
      try {
        for (let i = 0; i < item.groupmates.length; i += 1) {
          if (item.groupmates[i] === email) {
            alert("You are already in this group!");
            return;
          }
        }
        const token = await this.user.getIdToken();
        let config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.patch("https://api.group-finder.com/groups/" + email,
          {
            groupID: item.groupID,
          },
          config
        );
        item.groupmates.push(email);
        item.groupcount = item.groupmates.length + " / 6 group members.";
      } catch (error) {
        alert("Error joining group! Are you already in a group?");
        this.overlayLoad = false;
      }
    },
    async removeUser(item, email) {
      let found = false;
      for (let i = 0; i < item.groupmates.length; i += 1) {
        if (item.groupmates[i] === email) {
          found = true;
        }
      }
      if (!found) {
        alert("Not in this group!");
        return;
      }

      try {
        const token = await this.user.getIdToken();
        await axios.delete(
          "https://api.group-finder.com/groups/" +
            email,
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            data: {
              groupID: item.groupID
            },
          },
        );
        const index = item.groupmates.indexOf(email);
        item.groupmates.splice(index, 1);
        item.groupcount = item.groupmates.length + " / 6 group members.";
        if (item.groupmates.length === 0) {
            const item_index = this.items.indexOf(item);
            this.items.splice(item_index, 1);
            Vue.set(this, this.items, this.items);
        }
      } catch (error) {
        alert(error);
        this.overlayLoad = false;
      }
    },
  },
};
</script>

<style scoped>
</style>