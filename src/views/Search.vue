<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-full">
    <div class="text-center">
      <Tabs @tab-changed="handleTabChanged" />
      <div v-if="activeTab === 1" class="pt-[55px]">
        <FloorTabs @tab-x="floorChanged" />
      </div>
      <div v-if="activeTab === 2" class="pt-[55px]">
        <FloorTabs @tab-x="floorChanged" />
      </div>
      <div v-if="activeTab === 3" class="pt-[55px]">
        <FloorTabs @tab-x="floorChanged" />
      </div>
    </div>
    <div class="pt-[50px]">
      <div v-if="floorTab === 1 && activeTab === 1">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms1"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>

        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div
              class="pt-[15px]"
              v-if="currentUser && users.length < 3 && payment === false"
            >
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>

          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 2 && activeTab === 1">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms2"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 3 && activeTab === 1">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms3"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 4 && activeTab === 1">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms4"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 1 && activeTab === 2">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms5"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>

        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>

          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 2 && activeTab === 2">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms6"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 3 && activeTab === 2">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms7"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 4 && activeTab === 2">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms8"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 1 && activeTab === 3">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms9"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>

        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>

          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 2 && activeTab === 3">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms10"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 3 && activeTab === 3">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms11"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 1">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="floorTab === 4 && activeTab === 3">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <Choosie
            @show-capacity="capacityChanged"
            v-for="item in rooms12"
            :item="item"
            :selectedRoom="selectedRoom"
          />
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комната{{ selectedRoom.number }}
            </p>

            <p>Занято {{ users.length }}из 3 мест</p>

            <div class="pt-[15px]" v-if="currentUser && users.length < 3">
              <router-link
                @click="saveAccount"
                :to="{ path: '/Payment/' + selectedRoom.number }"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Pay</router-link
              >
            </div>
          </div>
          <div class="students">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.fName }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Корпус :</p>
                  <p>{{ user.corpus }}</p>
                </div>
                <div class="flex">
                  <p>Группа :</p>
                  <p>{{ user.group }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  updateDoc,
  getDocsFromServer,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/index";
import { db } from "../firebase/index";
import Tabs from "../components/Tabs.vue";
import FloorTabs from "../components/FloorTabs.vue";
import Choosie from "../components/Choosie.vue";
import InfoRoom from "../views/InfoRoom.vue";
export default {
  components: {
    Tabs,
    FloorTabs,
    Choosie,
    InfoRoom,
  },
  async created() {
    const r1 = doc(db, "hostels", "houms");
    const docSnap = await getDoc(r1);
    console.log(docSnap.data().dormitory1.floors[1]);
    this.rooms1 = docSnap.data().dormitory1.floors[1];
    this.rooms2 = docSnap.data().dormitory1.floors[2];
    this.rooms3 = docSnap.data().dormitory1.floors[3];
    this.rooms4 = docSnap.data().dormitory1.floors[4];
    console.log(docSnap.data().dormitory2.floors[1]);
    this.rooms5 = docSnap.data().dormitory2.floors[1];
    this.rooms6 = docSnap.data().dormitory2.floors[2];
    this.rooms7 = docSnap.data().dormitory2.floors[3];
    this.rooms8 = docSnap.data().dormitory2.floors[4];
    this.rooms9 = docSnap.data().dormitory3.floors[1];
    this.rooms10 = docSnap.data().dormitory3.floors[2];
    this.rooms11 = docSnap.data().dormitory3.floors[3];
    this.rooms12 = docSnap.data().dormitory3.floors[4];
  },

  data() {
    return {
      activeTab: 1,
      floorTab: 1,
      rooms1: [],
      rooms2: [],
      rooms3: [],
      rooms4: [],
      rooms5: [],
      rooms6: [],
      rooms7: [],
      rooms8: [],
      rooms9: [],
      rooms10: [],
      rooms11: [],
      rooms12: [],
      comanta: null,
      selectedRoom: null,
      romNumber: 0,
      payment: null,
      users: [],
      currentUser: null,
    };
  },
  methods: {
    handleTabChanged(newTab) {
      this.activeTab = newTab;
    },
    floorChanged(newTab) {
      this.floorTab = newTab;
    },
    async capacityChanged(newTab) {
      this.selectedRoom = newTab;
      const usersCollection = collection(db, "users");

      const userQuery = query(
        usersCollection,
        where("room", "==", newTab.number),
        where("dormitory", "==", this.activeTab),
        where("floor", "==", this.floorTab),
        where("payment", "==", true)
      );
      const userSnapshop = await getDocsFromServer(userQuery);
      console.log("docs", userSnapshop.docs);

      const users = [];
      userSnapshop.forEach((doc) => {
        const data = doc.data();
        const user = {
          Name: data.lastName,
          ImageUrl: data.imageUrl,
          fName: data.firstName,
          corpus: data.corpus,
          group: data.group,
        };
        users.push(user);
      });
      this.users = users;
    },

    async saveAccount() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        room: this.selectedRoom.number,
        dormitory: this.activeTab,
        floor: this.floorTab,
      });
    },
  },
  async mounted() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        // Получаем данные пользователя из Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        console.log(userDoc.data());
        if (userDoc.exists()) {
          this.payment = userDoc.data().payment;

          this.cardName =
            userDoc.data().firstName + " " + userDoc.data().lastName;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.active1 {
  background-color: blue;
  color: white;
}
</style>
