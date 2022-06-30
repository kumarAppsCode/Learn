SELECT
    to_char(round(funds_available_amount,2), '999,999,999.99') as funds_available_amount,
    to_char(round(:pcurrent_amount,2), '999,999,999.99') AS current_amount,
    (
        SELECT
            to_char(round(NVL(SUM(budget_transfer_amount),0),2), '999,999,999.99')
        FROM
            xxqia_budget_transfer_dtl
        WHERE
                company_code = :pcompany
            AND from_dept_code = :pdepartment
            AND from_account_code = :paccount
            AND plan_id IN (
                SELECT
                    plan_id
                FROM
                    xxqia_budget_plans
                WHERE
                    trim(plan_name) = trim(replace(:pplanname, '%20', ' '))
            )
            AND transfer_hdr_id NOT IN (
                SELECT
                    transfer_hdr_id
                FROM
                    xxqia_budget_transfer_hdr
                WHERE
                    status = 'Approved'  and  nvl(INTERFACE_STATUS,'E') = 'P'
            )
    )                pending_amount
FROM
    budget_trans_balance_dtl_v
WHERE
        1 = 1
    AND nvl(upper(control_budget_name), 'QIA MONTHLY BUDGET') = upper('QIA MONTHLY BUDGET')
    AND company = :pcompany
    AND department = :pdepartment
    AND account = :paccount
    AND nvl(budget_period,(SELECT
    substr(plan_name, 3, 2) year
FROM
    xxqia_budget_plans
WHERE
    trim(plan_name) = trim(replace(:pplanname, '%20', ' ')
    ))) LIKE (SELECT
    substr(plan_name, 3, 2) year
FROM
    xxqia_budget_plans
WHERE
    trim(plan_name) = trim(replace(:pplanname, '%20', ' ')
    ))
