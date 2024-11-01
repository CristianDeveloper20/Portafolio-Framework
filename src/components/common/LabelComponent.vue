<template>
    <div :class="className">
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'LabelComponent',
    props: {
        id: String,
        title: String,
        customClass: {
            default: 'default',
            type: String
        }
    },
    data() {
        return {
            className: 'label-container ' + this.customClass
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.label-container {
    display: inline-block;
    width: auto;

    span {
        display: inline-block;
        color: var(--colorLightBlack);
        letter-spacing: 0.12px;
        font: normal normal normal 13px/26px Montserrat;
        font-size: 13px;
        text-align: left;
    }
}

.bold-label {
    span {
        font-weight: bold;
    }
}

/*STYLES OF SIZE*/
.small {
    span {
        font-weight: bold;
        font-size: small;
    }
}

.medium {
    span {
        font-weight: bold;
        font-size: medium;
    }
}

.large {
    span {
        font-weight: bold;
        font-size: large;
    }
}


.extra-large {
    span {
        font-weight: bold;
        font-size: 3rem;
        /* Approx. 48px */
    }
}
</style>
