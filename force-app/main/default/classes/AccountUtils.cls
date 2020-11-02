public with sharing class AccountUtils {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Rating, Phone 
            	FROM Account
            	LIMIT 7];
    }
}
