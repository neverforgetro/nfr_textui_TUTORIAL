function Show(key,text)
    SendNUIMessage({
            action = "show",
            key = key,
            text = text      
})
end

function Hide()
    SendNUIMessage({
            action = "hide"
})
end