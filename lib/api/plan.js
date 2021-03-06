module.exports = {

  /**
   * Create a plan
   * @name plan.create
   * @param {AddPlan} plan plan object
   */
  create: function(plan) {
    if(plan.plan) plan = plan.plan;
    return this.request({'add-plan': {
      plan: plan
    }});
  }
  
};