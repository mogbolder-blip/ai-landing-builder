import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://ewtykcyfiwiuoscistor.supabase.co"
const supabaseKey = "sb_publishable_N2IRhb-mhR-eDweIa0RX3g_wCU5mIeh"

const supabase = createClient(supabaseUrl, supabaseKey)

async function savePage() {

let title = document.getElementById("title").value
let description = document.getElementById("description").value

const { data, error } = await supabase
.from("pages")
.insert([
{
title: title,
description: description
}
])

if(error){
alert("Error saving page")
}else{
alert("Landing Page Saved!")
}

}
