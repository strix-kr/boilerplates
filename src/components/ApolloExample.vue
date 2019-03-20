<template>
    <div class="apollo-example">

        <!-- Apollo watched Graphql query -->
        <ApolloQuery
            :query="require('../graphql/UserList.gql')"
            :variables="{
                'hasRoles': ['offline_access'],
                'orderBy': 'identity.id'
            }"
        >
            <template slot-scope="{ result: { loading, error, data } }">
                <!-- loading  -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- error  -->
                <div v-else-if="error" class="error apollo">An error occured</div>

                <!-- success  -->
                <div v-else-if="data" class="result apollo">
                    <p>total : {{ data.users.total }}</p>
                    <ul>
                        <li
                            v-for="(user, inx) in data.users.entries"
                            :key="inx"
                        >
                            <p
                                v-for="(key, idx) in Object.keys(user)"
                                :key="idx"
                            >
                                <span>{{ key }} : </span>
                                <span>{{ user[key] }}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div v-else class="no-result apollo">No result :(</div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.apollo-example {
    .result {
        ul {
            li {
                display: block;
                padding: 10px;
                border: 1px solid #ddd;
                margin: 10px;
            }
        }
    }
}
</style>
