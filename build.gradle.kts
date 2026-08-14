plugins {
    id("java")
}

group = "io.github.awsome-creeper9"
version = "1.0"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:6.0.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    implementation("net.dv8tion:JDA:6.5.0") {
        exclude(module="opus-java") //sound stuffs
        exclude(module="tink") //encryption stuffs for sound
    }
}

tasks.test {
    useJUnitPlatform()
}