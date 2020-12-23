<template>
<div>
  <v-card v-if="currentGroup">
    <v-alert outlined color="#ee44aa">
      <v-card-title color="grey">
        Your Group:
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
            <v-col align="start" cols="6">
              <v-list-item flat two-line>
                <v-list-item-content>
                  <v-list-item-title>Availability:</v-list-item-title>
                  <v-data-table
                    :headers="availability_headers"
                    :items="currentGroup.availability_items"
                    :hide-default-footer="true"
                    class="elevation-1"
                  >
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.morning="{ item }">
                      <v-simple-checkbox
                        v-model="item.morning"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.afternoon="{ item }">
                      <v-simple-checkbox
                        v-model="item.afternoon"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.evening="{ item }">
                      <v-simple-checkbox
                        v-model="item.evening"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.night="{ item }">
                      <v-simple-checkbox
                        v-model="item.night"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                  </v-data-table>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col align="start" cols="6">
              <v-list flat dense>
                <v-list-item-title>{{ currentGroup.groupmates.length }} / 6 Group members have joined:</v-list-item-title>
                <v-list-item v-for="(gm, i) in currentGroup.groupmates" :key="i">
                  <v-list-item-icon>
                    <v-icon size="15">fa-users</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{ gm.email }}</v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <v-container fluid class="text-wrap ma-0">
                        Relevant Previous Coursework:
                          <v-chip
                            v-for="(RPC, i) in gm.RPC"
                            :key="i"
                            class="ma-0 mr-1"
                            x-small
                          >
                            {{RPC}}
                          </v-chip>
                      </v-container>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mt-n4 mb-n2">
                      <v-container fluid class="text-wrap ma-0">
                        Search Engine Preferences:
                        <v-chip
                          v-for="(SEP, i) in gm.SEP"
                          :key="i"
                          class="ma-0 mr-1"
                          x-small
                        >
                          {{SEP}}
                        </v-chip>
                      </v-container>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Prefer synchronous vs. asynchronous
                    work:</v-list-item-title
                  >
                  <v-row>
                    <v-col lg="12">
                      <v-slider
                        :value="currentGroup.async"
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

              <v-list-item class="mt-n8 mb-n6">
                <v-list-item-content>
                  <v-list-item-title
                    >Prefer to start assignments:</v-list-item-title
                  >
                  <v-row>
                    <v-col lg="12">
                      <v-slider
                        :value="currentGroup.procast"
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
            </v-col>

            <v-col align="start">
              <v-list-item flat two-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Other information about the group:</v-list-item-title
                  >
                  <p>
                      {{ currentGroup.other }}
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions
        align="center"
        :loading="loading"
        loading-text="Loading... Please wait"
      >
        <v-btn text @click="removeUser(null, email, currentGroup.groupID)"> Leave Group </v-btn>
      </v-card-actions>
    </v-alert>
  </v-card>
  <v-card>
    <v-card-title>
      Groups Looking for Members:
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
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
            <v-col align="start" cols="6">
              <v-list-item flat two-line>
                <v-list-item-content>
                  <v-list-item-title>Availability:</v-list-item-title>
                  <v-data-table
                    :headers="availability_headers"
                    :items="item.availability_items"
                    :hide-default-footer="true"
                    class="elevation-1"
                  >
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.morning="{ item }">
                      <v-simple-checkbox
                        v-model="item.morning"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.afternoon="{ item }">
                      <v-simple-checkbox
                        v-model="item.afternoon"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.evening="{ item }">
                      <v-simple-checkbox
                        v-model="item.evening"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:item.night="{ item }">
                      <v-simple-checkbox
                        v-model="item.night"
                        disabled
                      ></v-simple-checkbox>
                    </template>
                  </v-data-table>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col align="start" cols="6">
              <v-list flat dense>
                <v-list-item-title>{{ item.groupmates.length }} / 6 Group members have joined:</v-list-item-title>
                <v-list-item v-for="(gm, i) in item.groupmates" :key="i">
                  <v-list-item-icon>
                    <v-icon size="15">fa-users</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{ gm.email }}</v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <v-container fluid class="text-wrap ma-0">
                        Relevant Previous Coursework:
                          <v-chip
                            v-for="(RPC, i) in gm.RPC"
                            :key="i"
                            class="ma-0 mr-1"
                            x-small
                          >
                            {{RPC}}
                          </v-chip>
                      </v-container>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mt-n4 mb-n2">
                      <v-container fluid class="text-wrap ma-0">
                        Search Engine Preferences:
                        <v-chip
                          v-for="(SEP, i) in gm.SEP"
                          :key="i"
                          class="ma-0 mr-1"
                          x-small
                        >
                          {{SEP}}
                        </v-chip>
                      </v-container>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-list-item>
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

              <v-list-item class="mt-n8 mb-n6">
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
          </v-row>
          <v-row>
            <v-col align="start">
              <v-btn
                v-if="currentGroup && currentGroup.groupID !== item.groupID"
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
                @click="removeUser(item, email, item.groupID)"
                >Leave Group</v-btn
              >
            </v-col>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </v-card>
</div>
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
      sortBy: 'groupcount',
      sortDesc: false,
      headers: [
        { text: "Group Members", value: "groupcount", align: "start", sortable: true},
        { text: "Time Zone", value: "timezone" },
      ],
      items: [],
      availability_headers: [
        { text: "Day of Week", value: "day" },
        { text: "Mornings", value: "morning" },
        { text: "Afternoons", value: "afternoon" },
        { text: "Evenings", value: "evening" },
        { text: "Nighttime", value: "night" },
      ],
      currentGroup: null,
    };
  },
  async mounted() {
    try {
      const token = await this.user.getIdToken(true);
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get("https://api.group-finder.com/groups/", config);
      this.items = response.data;
      for (let i = 0; i < this.items.length; i++) {
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
        const groupmates_with_info = [];
        var currentGroup = false;
        for (let j = 0; j < this.items[i].groupmates.length; j++) {
          if (this.items[i].groupmates[j] === this.email) currentGroup = true;
          try {
            const user_info = await axios.get("https://api.group-finder.com/users/" + this.items[i].groupmates[j], config);
            groupmates_with_info.push({email: this.items[i].groupmates[j], RPC: user_info.data.RPC, SEP: user_info.data.SEP});
          }
          catch (error) {
            groupmates_with_info.push({email: this.items[i].groupmates[j], RPC: null, SEP: null});
          }
        }
        this.items[i].groupmates = groupmates_with_info;
        this.items[i].availability_items = [
          { day: "Monday", morning: this.items[i].monday[0], afternoon: this.items[i].monday[1], evening: this.items[i].monday[2], night: this.items[i].monday[3] },
          { day: "Tuesday", morning: this.items[i].tuesday[0], afternoon: this.items[i].tuesday[1], evening: this.items[i].tuesday[2], night: this.items[i].tuesday[3] },
          { day: "Wednesday", morning: this.items[i].wednesday[0], afternoon: this.items[i].wednesday[1], evening: this.items[i].wednesday[2], night: this.items[i].wednesday[3] },
          { day: "Thursday", morning: this.items[i].thursday[0], afternoon: this.items[i].thursday[1], evening: this.items[i].thursday[2], night: this.items[i].thursday[3] },
          { day: "Friday", morning: this.items[i].friday[0], afternoon: this.items[i].friday[1], evening: this.items[i].friday[2], night: this.items[i].friday[3] },
          { day: "Saturday", morning: this.items[i].saturday[0], afternoon: this.items[i].saturday[1], evening: this.items[i].saturday[2], night: this.items[i].saturday[3] },
          { day: "Sunday", morning: this.items[i].sunday[0], afternoon: this.items[i].sunday[1], evening: this.items[i].sunday[2], night: this.items[i].sunday[3] },
        ];

        if (currentGroup) {
          this.currentGroup = this.items[i];
        }
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
        const token = await this.user.getIdToken(true);
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
        this.currentGroup = item;
      } catch (error) {
        alert("Error joining group! Are you already in a group?");
        this.overlayLoad = false;
      }
    },
    async removeUser(item, email, groupID) {
      if (!item) {
        this.items.forEach((i) => {
          if (i.groupID === groupID) {
            item = i;
            return;
          }
        });
      }
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
        const token = await this.user.getIdToken(true);
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
        this.currentGroup = null;
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