<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Which days work best for your current group? (Click on the days)

      <v-stepper-content step="1">
        <v-row>

          <v-col>
            <v-menu
              v-model="monday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="monday_morning || monday_afternoon || monday_evening || monday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  Monday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="monday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="monday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="monday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="monday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="monday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="monday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>

          <v-col>
            <v-menu
              v-model="tuesday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="tuesday_morning || tuesday_afternoon || tuesday_evening || tuesday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  Tuesday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="tuesday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="tuesday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="tuesday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="tuesday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="tuesday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="tuesday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>

          <v-col>
            <v-menu
              v-model="wednesday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="wednesday_morning || wednesday_afternoon || wednesday_evening || wednesday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  wednesday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="wednesday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="wednesday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="wednesday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="wednesday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="wednesday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="wednesday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>

          <v-col>
            <v-menu
              v-model="thursday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="thursday_morning || thursday_afternoon || thursday_evening || thursday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  thursday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="thursday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="thursday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="thursday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="thursday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="thursday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="thursday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>

          <v-col>
            <v-menu
              v-model="friday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="friday_morning || friday_afternoon || friday_evening || friday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  friday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="friday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="friday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="friday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="friday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="friday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="friday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>

          <v-col>
            <v-menu
              v-model="saturday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="saturday_morning || saturday_afternoon || saturday_evening || saturday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  saturday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="saturday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="saturday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="saturday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="saturday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="saturday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="saturday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>

          <v-col>
            <v-menu
              v-model="sunday_menu"
              :close-on-content-click="false"
              :nudge-width="90"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="sunday_morning || sunday_afternoon || sunday_evening || sunday_night ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                >
                  sunday
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Availability:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="sunday_morning"
                        label="Mornings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="sunday_afternoon"
                        label="Afternoons"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="sunday_evening"
                        label="Evenings"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox class="shrink mt-0"
                        v-model="sunday_night"
                        label="Nighttime"
                      ></v-checkbox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="sunday_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="sunday_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col> Which timezone are you in? </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-autocomplete
              v-model="timezone"
              :items="timezone_list"
              label="Timezone"
              dense
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-btn to="/" text>Cancel</v-btn>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>


    <v-stepper-step :complete="e6 > 2" step="2">
      Fill in your information by clicking the INFO button below.
      Have other group members already? Fill in their emails and information too.

      <v-stepper-content step="2">
        <v-row>
          <v-col cols="8">
            <v-text-field
              :value="useremail"
              label="You"
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-menu
              v-model="user_menu"
              :close-on-content-click="false"
              :nudge-width="300"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="user_menu_clicked ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                  @click="user_menu_clicked = true"
                >
                  info
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Optional Info/Preferences:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-autocomplete
                        v-model="user_SEP"
                        :items="search_engine_components"
                        dense
                        chips
                        small-chips
                        label="Search Engine Preferences"
                        multiple
                      ></v-autocomplete>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-combobox
                        v-model="user_RPC"
                        clearable
                        multiple
                        small-chips
                        dense
                        label="Relevant Previous Courses"
                      ></v-combobox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="user_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="user_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="groupmate1"
              :counter="8"
              label="Groupmate 1"
              required
              suffix="@umich.edu"
              :maxlength="8"
            >
            </v-text-field>
          </v-col>
          <v-col v-if="groupmate1 != ''">
            <v-menu
              v-model="groupmate1_menu"
              :close-on-content-click="false"
              :nudge-width="300"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="groupmate1_menu_clicked ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                  @click="groupmate1_menu_clicked = true"
                >
                  info
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Optional Info/Preferences:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-autocomplete
                        v-model="groupmate1_SEP"
                        :items="search_engine_components"
                        dense
                        chips
                        small-chips
                        label="Search Engine Preferences"
                        multiple
                      ></v-autocomplete>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-combobox
                        v-model="groupmate1_RPC"
                        clearable
                        multiple
                        small-chips
                        dense
                        label="Relevant Previous Courses"
                      ></v-combobox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="groupmate1_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="groupmate1_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-text-field
              v-if="groupmate1 != ''"
              v-model="groupmate2"
              :counter="8"
              :maxlength="8"
              label="Groupmate 2"
              required
              suffix="@umich.edu"
            >
            </v-text-field>
          </v-col>
          <v-col v-if="groupmate1 != '' && groupmate2 != ''">
            <v-menu
              v-model="groupmate2_menu"
              :close-on-content-click="false"
              :nudge-width="300"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="groupmate2_menu_clicked ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                  @click="groupmate2_menu_clicked = true"
                >
                  info
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Optional Info/Preferences:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-autocomplete
                        v-model="groupmate2_SEP"
                        :items="search_engine_components"
                        dense
                        chips
                        small-chips
                        label="Search Engine Preferences"
                        multiple
                      ></v-autocomplete>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-combobox
                        v-model="groupmate2_RPC"
                        clearable
                        multiple
                        small-chips
                        dense
                        label="Relevant Previous Courses"
                      ></v-combobox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="groupmate2_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="groupmate2_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-text-field
              v-if="groupmate1 != '' && groupmate2 != ''"
              v-model="groupmate3"
              :counter="8"
              :maxlength="8"
              label="Groupmate 3"
              required
              suffix="@umich.edu"
            >
            </v-text-field>
          </v-col>
          <v-col v-if="groupmate1 != '' && groupmate2 != '' && groupmate3 != ''">
            <v-menu
              v-model="groupmate3_menu"
              :close-on-content-click="false"
              :nudge-width="300"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="groupmate3_menu_clicked ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                  @click="groupmate3_menu_clicked = true"
                >
                  info
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Optional Info/Preferences:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-autocomplete
                        v-model="groupmate3_SEP"
                        :items="search_engine_components"
                        dense
                        chips
                        small-chips
                        label="Search Engine Preferences"
                        multiple
                      ></v-autocomplete>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-combobox
                        v-model="groupmate3_RPC"
                        clearable
                        multiple
                        small-chips
                        dense
                        label="Relevant Previous Courses"
                      ></v-combobox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="groupmate3_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="groupmate3_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-text-field
              v-if="groupmate1 != '' && groupmate2 != '' && groupmate3 != ''"
              v-model="groupmate4"
              :counter="8"
              :maxlength="8"
              label="Groupmate 4"
              required
              suffix="@umich.edu"
            >
            </v-text-field>
          </v-col>
          <v-col v-if="groupmate1 != '' && groupmate2 != '' && groupmate3 != '' && groupmate4 != ''">
            <v-menu
              v-model="groupmate4_menu"
              :close-on-content-click="false"
              :nudge-width="300"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="groupmate4_menu_clicked ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                  @click="groupmate4_menu_clicked = true"
                >
                  info
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Optional Info/Preferences:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-autocomplete
                        v-model="groupmate4_SEP"
                        :items="search_engine_components"
                        dense
                        chips
                        small-chips
                        label="Search Engine Preferences"
                        multiple
                      ></v-autocomplete>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-combobox
                        v-model="groupmate4_RPC"
                        clearable
                        multiple
                        small-chips
                        dense
                        label="Relevant Previous Courses"
                      ></v-combobox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="groupmate4_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="groupmate4_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-text-field
              v-if="groupmate1 != '' && groupmate2 != '' && groupmate3 != '' && groupmate4 != ''"
              v-model="groupmate5"
              :counter="8"
              :maxlength="8"
              label="Groupmate 5"
              required
              suffix="@umich.edu"
            >
            </v-text-field>
          </v-col>
          <v-col v-if="groupmate1 != '' && groupmate2 != '' && groupmate3 != '' && groupmate4 != '' && groupmate5 != ''">
            <v-menu
              v-model="groupmate5_menu"
              :close-on-content-click="false"
              :nudge-width="300"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="groupmate5_menu_clicked ? 'green' : 'red'"
                  v-bind="attrs"
                  v-on="on"
                  @click="groupmate5_menu_clicked = true"
                >
                  info
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Optional Info/Preferences:
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-autocomplete
                        v-model="groupmate5_SEP"
                        :items="search_engine_components"
                        dense
                        chips
                        small-chips
                        label="Search Engine Preferences"
                        multiple
                      ></v-autocomplete>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-combobox
                        v-model="groupmate5_RPC"
                        clearable
                        multiple
                        small-chips
                        dense
                        label="Relevant Previous Courses"
                      ></v-combobox>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    @click="groupmate5_menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="groupmate5_menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
        <v-btn @click="e6 = 1" text>Go Back</v-btn>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>

    <v-stepper-step :complete="e6 > 3" step="3">
      Group Details

      <v-stepper-content step="3">
        <v-row>
          <v-col lg="12">
            Do you prefer your GROUP to work synchronously or asynchronously?
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12">
            <v-slider
              v-model="async"
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

        <v-row>
          <v-col lg="12">
            How soon do you prefer your GROUP to start working on an assignment?
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="12">
            <v-slider
              v-model="procastination"
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

        <v-btn @click="e6 = 2" text>Go Back</v-btn>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>

    <v-stepper-step :complete="e6 > 4" step="4">
      Any other information to share?

      <v-stepper-content step="4">
        <v-row>
          <v-col lg="12">
            <v-textarea
              v-model="otherinfo"
              outlined
              name="other"
              label="Other Information"
              :counter="500"
              :maxlength="500"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-btn @click="e6 = 3" text>Go Back</v-btn>
        <v-btn
          color="primary"
          @click="
            e6 = 5;
            submit();
          "
          >Submit Group Request</v-btn
        >
      </v-stepper-content>
    </v-stepper-step>

    <v-overlay :value="overlayLoad">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      Success! You have registered your group!
      <v-btn color="blue" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-stepper>
</template>


<script>
import axios from "axios";
import auth from "@/auth";

export default {
  name: "newSBR",
  data() {
    return {
      user: auth.user(),
      useremail: auth.user().email,
      e6: 1,
      monday_menu: false,
      monday_morning: false,
      monday_afternoon: false,
      monday_evening: false,
      monday_night: false,
      tuesday_menu: false,
      tuesday_morning: false,
      tuesday_afternoon: false,
      tuesday_evening: false,
      tuesday_night: false,
      wednesday_menu: false,
      wednesday_morning: false,
      wednesday_afternoon: false,
      wednesday_evening: false,
      wednesday_night: false,
      thursday_menu: false,
      thursday_morning: false,
      thursday_afternoon: false,
      thursday_evening: false,
      thursday_night: false,
      friday_menu: false,
      friday_morning: false,
      friday_afternoon: false,
      friday_evening: false,
      friday_night: false,
      saturday_menu: false,
      saturday_morning: false,
      saturday_afternoon: false,
      saturday_evening: false,
      saturday_night: false,
      sunday_menu: false,
      sunday_morning: false,
      sunday_afternoon: false,
      sunday_evening: false,
      sunday_night: false,
      timezone: "",
      timezone_list: [
        "(GMT-12:00) International Date Line West",
        "(GMT-11:00) Midway Island, Samoa",
        "(GMT-10:00) Hawaii",
        "(GMT-09:00) Alaska",
        "(GMT-08:00) Pacific Time (US & Canada)",
        "(GMT-08:00) Tijuana, Baja California",
        "(GMT-07:00) Arizona",
        "(GMT-07:00) Chihuahua, La Paz, Mazatlan",
        "(GMT-07:00) Mountain Time (US & Canada)",
        "(GMT-06:00) Central America",
        "(GMT-06:00) Central Time (US & Canada)",
        "(GMT-06:00) Guadalajara, Mexico City, Monterrey",
        "(GMT-06:00) Saskatchewan",
        "(GMT-05:00) Bogota, Lima, Quito, Rio Branco",
        "(GMT-05:00) Eastern Time (US & Canada)",
        "(GMT-05:00) Indiana (East)",
        "(GMT-04:00) Atlantic Time (Canada)",
        "(GMT-04:00) Caracas, La Paz",
        "(GMT-04:00) Manaus",
        "(GMT-04:00) Santiago",
        "(GMT-03:30) Newfoundland",
        "(GMT-03:00) Brasilia",
        "(GMT-03:00) Buenos Aires, Georgetown",
        "(GMT-03:00) Greenland",
        "(GMT-03:00) Montevideo",
        "(GMT-02:00) Mid-Atlantic",
        "(GMT-01:00) Cape Verde Is.",
        "(GMT-01:00) Azores",
        "(GMT+00:00) Casablanca, Monrovia, Reykjavik",
        "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
        "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris",
        "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "(GMT+01:00) West Central Africa",
        "(GMT+02:00) Amman",
        "(GMT+02:00) Athens, Bucharest, Istanbul",
        "(GMT+02:00) Beirut",
        "(GMT+02:00) Cairo",
        "(GMT+02:00) Harare, Pretoria",
        "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "(GMT+02:00) Jerusalem",
        "(GMT+02:00) Minsk",
        "(GMT+02:00) Windhoek",
        "(GMT+03:00) Kuwait, Riyadh, Baghdad",
        "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
        "(GMT+03:00) Nairobi",
        "(GMT+03:00) Tbilisi",
        "(GMT+03:30) Tehran",
        "(GMT+04:00) Abu Dhabi, Muscat",
        "(GMT+04:00) Baku",
        "(GMT+04:00) Yerevan",
        "(GMT+04:30) Kabul",
        "(GMT+05:00) Yekaterinburg",
        "(GMT+05:00) Islamabad, Karachi, Tashkent",
        "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "(GMT+05:30) Sri Jayawardenapura",
        "(GMT+05:45) Kathmandu",
        "(GMT+06:00) Almaty, Novosibirsk",
        "(GMT+06:00) Astana, Dhaka",
        "(GMT+06:30) Yangon (Rangoon)",
        "(GMT+07:00) Bangkok, Hanoi, Jakarta",
        "(GMT+07:00) Krasnoyarsk",
        "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        "(GMT+08:00) Kuala Lumpur, Singapore",
        "(GMT+08:00) Irkutsk, Ulaan Bataar",
        "(GMT+08:00) Perth",
        "(GMT+08:00) Taipei",
        "(GMT+09:00) Osaka, Sapporo, Tokyo",
        "(GMT+09:00) Seoul",
        "(GMT+09:00) Yakutsk",
        "(GMT+09:30) Adelaide",
        "(GMT+09:30) Darwin",
        "(GMT+10:00) Brisbane",
        "(GMT+10:00) Canberra, Melbourne, Sydney",
        "(GMT+10:00) Hobart",
        "(GMT+10:00) Guam, Port Moresby",
        "(GMT+10:00) Vladivostok",
        "(GMT+11:00) Magadan, Solomon Is., New Caledonia",
        "(GMT+12:00) Auckland, Wellington",
        "(GMT+12:00) Fiji, Kamchatka, Marshall Is.",
        "(GMT+13:00) Nuku'alofa"
      ],
      groupmate1: "",
      groupmate2: "",
      groupmate3: "",
      groupmate4: "",
      groupmate5: "",
      search_engine_components: [
        "HTML Parser", 
        "Crawler", 
        "Index", 
        "Constraint Solver", 
        "Query Compiler", 
        "Ranker", 
        "Frontend",
        "No Preference"
      ],
      user_menu: false,
      user_menu_clicked: false,
      user_SEP: [],
      user_RPC: [],
      groupmate1_menu: false,
      groupmate1_menu_clicked: false,
      groupmate1_SEP: [],
      groupmate1_RPC: [],
      groupmate2_menu: false,
      groupmate2_menu_clicked: false,
      groupmate2_SEP: [],
      groupmate2_RPC: [],
      groupmate3_menu: false,
      groupmate3_menu_clicked: false,
      groupmate3_SEP: [],
      groupmate3_RPC: [],
      groupmate4_menu: false,
      groupmate4_menu_clicked: false,
      groupmate4_SEP: [],
      groupmate4_RPC: [],
      groupmate5_menu: false,
      groupmate5_menu_clicked: false,
      groupmate5_SEP: [],
      groupmate5_RPC: [],
      async: "50",
      procastination: "50",
      virtual: "physical",
      otherinfo: "",
      overlayLoad: false,
      snackbar: false,
      timeout: 5000,
    };
  },
  methods: {
    async submit() {
      this.overlayLoad = true;
      try {
        const token = await this.user.getIdToken(true);
        let config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        let aMon = [this.monday_morning, this.monday_afternoon, this.monday_evening, this.monday_night];
        let aTue = [this.tuesday_morning, this.tuesday_afternoon, this.tuesday_evening, this.tuesday_night];
        let aWed = [this.wednesday_morning, this.wednesday_afternoon, this.wednesday_evening, this.wednesday_night];
        let aThu = [this.thursday_morning, this.thursday_afternoon, this.thursday_evening, this.thursday_night];
        let aFri = [this.friday_morning, this.friday_afternoon, this.friday_evening, this.friday_night];
        let aSat = [this.saturday_morning, this.saturday_afternoon, this.saturday_evening, this.saturday_night];
        let aSun = [this.sunday_morning, this.sunday_afternoon, this.sunday_evening, this.sunday_night];

        let groupmates = [];
        groupmates.push([this.useremail, this.user_SEP, this.user_RPC]);
        if (this.groupmate1 !== "") groupmates.push([this.groupmate1 + "@umich.edu", this.groupmate1_SEP, this.groupmate1_RPC]);
        if (this.groupmate1 !== "" && this.groupmate2 !== "") groupmates.push([this.groupmate2 + "@umich.edu", this.groupmate2_SEP, this.groupmate2_RPC]);
        if (this.groupmate1 !== "" && this.groupmate2 !== "" && this.groupmate3 !== "") groupmates.push([this.groupmate3 + "@umich.edu", this.groupmate3_SEP, this.groupmate3_RPC]);
        if (this.groupmate1 !== "" && this.groupmate2 !== "" && this.groupmate3 !== "" && this.groupmate4 !== "") groupmates.push([this.groupmate4 + "@umich.edu", this.groupmate4_SEP, this.groupmate4_RPC]);
        if (this.groupmate1 !== "" && this.groupmate2 !== "" && this.groupmate3 !== "" && this.groupmate4 !== "" && this.groupmate5 !== "") groupmates.push([this.groupmate5 + "@umich.edu", this.groupmate5_SEP, this.groupmate5_RPC]);
        await axios
          .post(
            "https://api.group-finder.com/groups/",
            {
              groupmates: groupmates,
              monday: aMon,
              tuesday: aTue,
              wednesday: aWed,
              thursday: aThu,
              friday: aFri,
              saturday: aSat,
              sunday: aSun,
              timezone: this.timezone,
              async: this.async,
              procast: this.procastination,
              other: this.otherinfo,
            },
            config
          );        
        this.snackbar = true;
        this.overlayLoad = false;
        this.$router.push('/');
      } catch (error) {
        this.overlayLoad = false;
      }
    },
  },
};
</script>