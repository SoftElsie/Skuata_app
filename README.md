# Polmed Admin App
# Rules and standards on working on the applications
    -- 1. Hardcoding is strickley forbidden
        -- a. All constants files to be placed under polmed-pms_app.client/src/app/domain/constant
        -- b. Names of Constant properties should be UPPER_SNAKE casing 
        -- c. Names of Constant classes should be CarmelCase 
        -- d. all for all response status codes should come from the 'http' library i.e HttpStatusCode.Ok
    -- 2. Component creation
        -- a. only component with screans that are outside the framework should have the .html template
        -- b. only components with styles that are unique should have their own .css template
        -- c. if a module is different or layout is different with tyles to th rest , the css will have to be on the 
           module/layer level
        -- d. not redundent code is allowed , valid reasoning will be requested through writing of duplicating code
    -- 3. Service creation
        -- a. for most CRUD functionality the varius baseServices(interfaceService,securityService,appService) are created 
           -- i.   interfaceService: extends the BaseService and is the base service for all the requests going to the Interface-API
           -- ii.  securityService: extends the BaseService and is the base service for all the requests going to the Sec-API
           -- iii. appService: extends the BaseService and is the base service for all the requests going to the App-API
        -- b. for any request not catered for on the base services , they should be extended the their formats should be followed
    -- 4. Git/Project Management
        -- a. no changes withought at task 
        -- b. no overlaping of the task loged on management board
to publish 
    -- 5. dotnet publish AngularInterface.csproj  -o refined

# Clarity
 -- for any matters not yet placed on the above and you feel you need clarity please contact Murangi Vhengani , Confidence Nomfundo Mpofu