<template>
    <q-layout view="lHh lpR lFf">
        <q-header style="height: 91px" bordered class="bg-white text-black">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-input
                    class="q-ma-lg"
                    color="grey-3"
                    label-color="grey-5"
                    outlined
                    label="Search"
                    dense
                    :dark="false"
                >
                    <template v-slot:append>
                        <q-icon name="search" color="grey-5" />
                    </template>
                </q-input>

                <q-list class="q-ml-auto q-mr-xl">
                    <q-item>
                        <div class="row q-mt-sm q-mr-md">
                            <div class="col q-mr-lg cursor-pointer">
                                <q-icon
                                    size="sm"
                                    name="notifications_active"
                                    color="grey-5"
                                />
                            </div>
                            <div class="col q-mr-lg cursor-pointer">
                                <q-icon size="sm" name="sms" color="grey-5" />
                            </div>
                        </div>
                        <q-item-section avatar class="cursor-pointer">
                            <q-avatar>
                                <img
                                    src="https://cdn.quasar.dev/img/boy-avatar.png"
                                />
                            </q-avatar>
                        </q-item-section>
                        <div class="row q-mt-sm cursor-pointer" clickabel>
                            <div class="col-10">
                                <q-item-section class="text-weight-medium">
                                    Sanjana Jain
                                </q-item-section>
                            </div>
                            <div class="col">
                                <q-icon
                                    size="sm"
                                    name="expand_more"
                                    color="grey-5"
                                />
                            </div>
                        </div>
                    </q-item>
                </q-list>
            </q-toolbar>
        </q-header>

        <q-drawer
            class="bg-grey-1"
            show-if-above
            v-model="leftDrawerOpen"
            side="left"
            bordered
            :width="242"
        >
            <!-- drawer content -->
            <div class="flex-center">
                <q-toolbar-title
                    style="font-family: 'Handwritten', cursive"
                    :class="amStyles"
                    >AMARYA</q-toolbar-title
                >
            </div>

            <q-item-label header>MAIN MENU</q-item-label>
            <q-list :class="sideBarListStyles">
                <q-item
                    v-for="item in mainMenuList"
                    :key="item.title"
                    clickable
                    v-ripple
                    :to="item.link"
                    exact
                    :exact-active-class="customActiveClass"
                >
                    <q-item-section avatar>
                        <q-icon :name="item.icon" />
                    </q-item-section>

                    <q-item-section>{{ item.title }}</q-item-section>
                </q-item>
            </q-list>
            <q-item-label header>OTHER</q-item-label>
            <q-list :class="sideBarListStyles">
                <q-item
                    v-for="item in otherMenuList"
                    :key="item.title"
                    clickable
                    v-ripple
                    :to="item.link"
                    exact
                    :exact-active-class="customActiveClass"
                >
                    <q-item-section avatar>
                        <q-icon :name="item.icon" />
                    </q-item-section>

                    <q-item-section>{{ item.title }}</q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
    data() {
        return {
            customActiveClass: "custom-active-color",
            mainMenuList: [
                { title: "Dashboard", icon: "dashboard", link: "/" },
                { title: "Assets", icon: "person_add_alt_1", link: "/assets" },
                { title: "Leave Mgmt", icon: "event", link: "/leave" },
                { title: "Trainings", icon: "group", link: "/trainings" },
                { title: "Worksheet", icon: "workspaces", link: "/worksheet" },
            ],
            otherMenuList: [
                { title: "Policies", icon: "headset", link: "/policies" },
                { title: "Settings", icon: "settings", link: "/settings" },
            ],
        };
    },
    methods: {
        getActiveClass(item) {
            console.log(item);
            return item.isActive ? this.customActiveClass : "";
        },
    },
    setup() {
        const leftDrawerOpen = ref(false);

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
    computed: {
        amStyles() {
            return "text-center text-h4 text-weight-bolder q-mt-xl q-mb-xl";
        },
        sideBarListStyles() {
            return "text-h6 text-grey-7 text-weight-medium";
        },
    },
};
</script>

<style>
.custom-active-color {
    color: #ff5151 !important;
}

.cursor-pointer {
    cursor: pointer;
}
</style>
